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

        $user = Auth::user();
        //Create Surveyed Profile:
        if($user){

            if($user->survey){
                if($user->survey->isFinished){
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
                            "survey" => $user->survey
                        ]
                        ,200);
                }
                return response()->json($user->survey,500);
            }
        }

        //User do not have survey
        $surveyed =  $user->surveyedProfile();
        DB::beginTransaction();
        try {
            $survey = new Survey();
            $survey->isFinished = false;
            $survey->uuid = Str::orderedUuid();
            $survey->user_id = $user->id;
            $survey->population_id = 1; //TODO;
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

    public function formatAnswers($section){

        foreach ($section->questions as $key => $question) {
                $answer_arr = array();
                $answer  = isset($question->answers[0])? $question->answers[0]:array();

                switch ($question->type) {
                    case 'SC':
                        foreach ($question->options as $key => $option) {
                            $values = isset( $answer->value)? json_decode( $answer->value,  true) : array($question->label."_".$option->subcode=>null);
                            $answer_arr[$question->label."_".$option->subcode] = $values[$question->label."_".$option->subcode] ;
                        }
                        break;
                    case 'M':

                        foreach ($question->options as $key => $option) {
                            $values = isset( $answer->value)? json_decode( $answer->value, true) : array($option->subcode=>false);

                            $answer_arr[$question->label."_".$option->subcode] = $values[$option->subcode]?true:false;
                        }
                      //  if(isset($values["otro"])){
                            $answer_arr[$question->label."_OTRO"] =  isset($values["otro"])? $values["otro"] : " ";
                      //  }

                        break;
                    case 'U':



                        $values = isset( $answer->value)? json_decode( $answer->value, true) : array(""=>"1");

                        $answer_arr[$question->label] =  array_flip($values)["1"] ;
                       // if(isset($values["otro"])){
                            $answer_arr[$question->label."_OTRO"] =  isset($values["otro"])? $values["otro"] : " ";
                       // }
                        break;
                    case 'D':

                      if(  isset( $answer->value)) {
                        $da = $answer->value ;
                      }else{
                        $da =     "";
                      }
                             $answer_arr[$question->label] =  $da ;


                        break;
                    case 'INS':


                        break;
                    default:
                        $answer_arr[$question->label] = isset(  $answer->value)?$answer->value : "";
                        break;
                }

                $question->answer = $answer_arr ;

            }

        return $section;
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
            'section_id'     => 'required',
        ]);
        $user = Auth::user();
        DB::beginTransaction();
        try {
            $survey = new Survey();
            //Get all question of a survey if exist, if not, create one
            if($request->has('uuid') && $request->input('uuid') != "null"  && $request->input('uuid') != ""){
                $survey  = Survey::where("uuid", $request->input('uuid'))->first();
            }else{
                $survey->population_id = 1;
                $survey->user_id = $user->id;
            }
            DB::commit();
           if($survey->save()){
                $section = Section::where("id", $request->input('section_id'))->get();
                $questions = $section[0]->questions;
                $finished = 0;
                foreach ( $questions  as $key =>$question) {
                    $label = $question->label;
                    if (strpos($label, ".") !== false) {
                        //Fix if label has dot.
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
                        case 'SC':
                            //TODO: only store last change, not whole survey
                            $json_value = array();
                            $done = 0;

                            $checked = 0;
                            foreach ($question->options as $key => $option) {
                                if( $request->input($label."_".$option->subcode) !=   "null" && $request->input($label."_".$option->subcode) !=   null && $request->input($label."_".$option->subcode) !=   ""  ){
                                    $done++;
                                    $json_value[$label."_".$option->subcode] = $request->input($label."_".$option->subcode);
                                }else{
                                    $json_value[$label."_".$option->subcode] = "null";
                                }

                            }
                            $checked =  $done == 4 ? true : false;
                            $finished = $done == 4 ? $finished+1 : $finished;

                            $done = 0;
                            Answer::updateOrCreate(
                                ['survey_id' => $survey->id, 'question_id' =>  $question->id],
                                [   'checked' =>      $checked ,
                                    'value' =>  json_encode($json_value)
                                     ]);

                            //if finished, store sum for each ocupational field.


                            break;
                        case 'M':
                            $json_value = array();
                            foreach ($question->options as $key => $option) {

                                if( $request->input($label."_".$option->subcode) != null){
                                    $json_value[$label."_".$option->subcode] = $request->input($label."_".$option->subcode);
                                }else{
                                    $json_value[$label."_".$option->subcode] = "";
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
                }
                //Check if survey has finalized
                if( $finished >= 52) {
                    $survey->isFinished = true;

                    $survey->save();
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
     * Calculate ranking based on answers,
     * data has been stored as json "label": "value"
     * where label contains the ID of the area ocupacional.
     * @param  \App\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function rank($uuid)
    {
        // calculate total for specific survey
        $survey  = Survey::where("uuid", $uuid)->first();
        $areas_count = array();
        foreach ($survey->answers as $key => $answer) {
           $options_values = json_decode($answer->value);
           foreach ($options_values as $label => $value) {
               # split label to get ocupational area id, format: 1_2_1 Section_QNumber_id:
                $label = explode("_", $label);
                $area_ocupational_id = end($label);

                if( isset($areas_count["".$area_ocupational_id])  ){
                    $areas_count["".$area_ocupational_id] =  $areas_count["".$area_ocupational_id] +  (int) $value;
                }else{
                    $areas_count["".$area_ocupational_id] = 0;
                }
           }


        }
        return response()->json($areas_count,500);

        // Store totals for specific survey in database
        foreach ($areas_count as $area_id => $area_total) {
            $AreaRank =  CnoOcupationalFieldRanking::where("survey_id", $survey->id);
            $user = CnoOcupationalFieldRanking::updateOrCreate(
                ['survey_id' =>   $survey->id,'ocupational_area_id' =>   $area_id],
                ['total' =>   $area_total]
            );

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
