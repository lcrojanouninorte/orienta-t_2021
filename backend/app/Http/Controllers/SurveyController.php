<?php

namespace App\Http\Controllers;

use App\Survey;
use App\Surveyed;
use App\Population;
use Auth;

use App\Section;
use App\Answer;
use Arr;
use Illuminate\Http\Request;
use App\Question;
use DB;
use Illuminate\Support\Str;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $surveys_arr = array();
        $answer_arr = array();
        $surveys = Survey::with("answers.question.section")->get();

        foreach ($surveys as $key => $survey) {
            $answer_arr =  array();
            foreach ($survey->answers as $key => $answer) {
                switch ($answer->question->type) {
                    case 'M':
                        $values = json_decode( $answer->value, true) ;

                        foreach ($answer->question->options as $key => $option) {
                            $answer_arr[$answer->question->label."_".$option->subcode] = isset($values[$option->subcode])? $values[$option->subcode] : 0;
                        }
                        if(isset($values["otro"])){
                            $answer_arr[$answer->question->label."_OTRO"] = $values["otro"];
                        }

                        break;
                    case 'U':
                        $values = json_decode( $answer->value, true) ;

                        $answer_arr[$answer->question->label] =  $values["1"];
                        if(isset($values["otro"])){
                            $answer_arr[$answer->question->label."_OTRO"] = $values["otro"];
                        }

                        break;
                    default:
                        $answer_arr[$answer->question->label] = $answer->value;
                        break;
                }

            }
           $surveys_arr[] = $answer_arr;

        }
        return response()->success($surveys_arr);
        $sections = Section::with("questions.answers")->with("questions.options")->with("questions.conditions.question")->with(['questions' => function ($q)  {
            $q->orderBy('position', "ASC");
        }])->get();
        return response()->success($sections);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //0: no esta en base de datos
        //1: nombre no coincide con base de datos
        //2: Encuesta finalizada
        //3: encuesta pendiente.
        //4: nueva encuesta

         // $user = Auth::user();
         $this->validate($request, [
            'pollster_id'     => 'required',
            'population_id'     => 'required',
            'complete_name'     => 'required',
            'doc'     => 'required'
        ]);
        //Check if surveyed exist in databese
        $surveyed = Surveyed::with("survey")
        ->where("identification", $request->input("doc"))
        ->where("population_id", $request->input("population_id"))
        ->first();

        if(!$surveyed){
            return response()->json(
                [
                    "type"=> 0,
                    "msg"=>"Usted no se encuentra registrado en nuestra base de datos. Por favor revisé su información e intente nuevamente."
                ]
                ,200);

        }
        //check if name is correct
        $perc = 0;
        $sim = similar_text($surveyed->full_name, $request->input("complete_name"), $perc);
        if($perc < 53){
             return response()->json(
                [
                    "type"=> 1,
                    "msg"=>"Su nombre no coincide con nuestros registros, por favor revisé e intente nuevaente"
                ]
                ,200);
        }

        //check if user has survey
        if($surveyed->survey){
            if($surveyed->survey->isFinished){
                return response()->json(
                    [
                        "type"=> 2,
                        "msg"=>"Usted ya finalizó esta encuesta, Gracias por participar."
                    ]
                    ,200);

            }else{
                return response()->json(
                    [
                        "type"=> 3,
                        "msg"=> "Encuesta pendiente por terminar",
                        "survey" => $surveyed->survey
                    ]
                    ,200);
            }
        }

        DB::beginTransaction();
        try {
            $survey = new Survey();
            $survey->isFinished = false;
            $survey->uuid = Str::orderedUuid();
            $survey->user_id = $request->input("pollster_id");
            $survey->population_id = $request->input("population_id");
            $survey->surveyed_id =  $surveyed->id;
            DB::commit();
            if($survey->save()){
                $surveyed->survey_id = $survey->id;
                $surveyed->save();
                return response()->json(
                    [
                        "type"=> 4,
                        "msg"=> "Encuesta Nueva",
                        "survey" => $survey
                    ]
                    ,200);

            }else{
                return response()->json($survey,500);

            }


        }catch (\Exception $e) {
            DB::rollback();
            throw $e;
            return response()->json($e->getErrors(),500);
        } catch (\Throwable $e) {
            DB::rollback();
            throw $e;
            return response()->json($e->getErrors(),500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
       //
        $this->validate($request, [
            'pollster_id'     => 'required',
           // 'population_id'     => 'required',
            'section_id'     => 'required',

        ]);


        DB::beginTransaction();
        try {
            $survey = new Survey();
            //Get all question of given section

            if($request->has('uuid') && $request->input('uuid') != "null"  && $request->input('uuid') != ""){
                $survey  = Survey::where("uuid", $request->input('uuid'))->first();
                if($request->input('section_id') == 6){
                    $survey->isFinished = true;
                }
            }else{
                $survey->population_id = $request->input("population_id");
                $survey->user_id = $request->input("pollster_id");
            }
            DB::commit();
           if($survey->save()){
                $section = Section::where("id", $request->input('section_id'))->get();
                $questions = $section[0]->questions;
                foreach ( $questions  as $key =>$question) {
                    $label = $question->label;
                    if (strpos($label, ".") !== false) {
                        $label = str_replace('.', '_', $label);
                    }
                    $value = strval($request->input($label));
                    switch ($question->type) {
                        case 'D':

                            $now = new \DateTime(substr($value,0,20));

                            Answer::updateOrCreate(
                                ['survey_id' => $survey->id, 'question_id' =>  $question->id],
                                ['value' =>   $now->format('c')  ]);
                            break;
                        case 'U':
                            $json_value = array();
                            $json_value[ $value] ="1";
                            if($request->input($label."_OTRO") ){
                                $json_value["otro"] = strval($request->input($label."_OTRO"));
                            }

                            Answer::updateOrCreate(
                                ['survey_id' => $survey->id, 'question_id' =>  $question->id],
                                ['value' =>   json_encode($json_value)]
                            );
                        break;
                        case 'M':
                            $json_value = array();
                            foreach ($question->options as $key => $option) {

                                if( $request->input($label."_".$option->subcode) =="true"){
                                    $json_value[$option->subcode] = true;
                                }else{
                                    $json_value[$option->subcode] = false;
                                }

                            }
                            if( $request->input($label."_OTRO") ){

                                $json_value["otro"]  = strval($request->input($label."_OTRO"));
                            }
                            Answer::updateOrCreate(
                                ['survey_id' => $survey->id, 'question_id' =>  $question->id],
                                ['value' =>    json_encode($json_value) ]);


                            break;
                        case 'INS':
                            break;
                        default:
                        Answer::updateOrCreate(
                            ['survey_id' => $survey->id, 'question_id' =>  $question->id],
                            ['value' =>    $value  ]);

                            break;
                    }




                        //TODO: otro

                }
               return response()->json($survey,200);
           }
           return response()->json($survey,500);


        }catch (\Exception $e) {
            DB::rollback();
            throw $e;
            return response()->json($e->getErrors(),500);
        } catch (\Throwable $e) {
            DB::rollback();
            throw $e;
            return response()->json($e->getErrors(),500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        //$auth_user = Auth::user();
        //Get active population
        $population = Population::where("active", 1)->first();
        if($population){

            if($id == "all"){
                $surveys = Survey::with("surveyed")
                ->where('population_id',$population->id)
                ->get();

            }else{
                $surveys = Survey::with("surveyed")
                ->where('user_id', $id)
                ->where('population_id',$population->id)
                ->get();
            }
            return response()->json($surveys,200);

        }else{
            return response()->json([],200);

        }


    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function byUuid($id)
    {
        //
        //$auth_user = Auth::user();
        $surveys = Survey::with("surveyed")->where('uuid', $id)->first();


        return response()->json($surveys,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function edit(Survey $survey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Survey $survey)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        //
         $auth_user = Auth::user();

          //Limit delete of role if no one have it.
          $survey = Survey::find($id);
          if($survey->delete()){
                  return response()->json("OK",200);
              } else {
                  return response()->json("No se pudo eliminar",500);
              }
    }
}
