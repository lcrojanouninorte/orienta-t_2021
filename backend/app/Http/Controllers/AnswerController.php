<?php

namespace App\Http\Controllers;

use App\Answer;
use App\Survey;
use App\Section;

use Illuminate\Http\Request;
use App\Exports\AnswersExport;
use Excel;
use DateTime;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function show(Answer $answer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function edit(Answer $answer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Answer $answer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Answer $answer)
    {
        //
    }

    public function download($population_id, $user_id){

        $header = $this->getheaders();
        $surveys_arr = array($header);
        foreach ($header as $key => $value) {
            $header[$key] = null;
        }

        $surveys = Survey::where("population_id", $population_id)->with("answers.question.section")->with("population")->get();

        foreach ($surveys as $key => $survey) {
            $answer_arr =  $header ;
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
                        $values = json_decode( $answer->value, true)  ;

                        $answer_arr[$answer->question->label] =  array_flip($values)["1"] ;
                        if(isset($values["otro"])){
                            $answer_arr[$answer->question->label."_OTRO"] =  isset($values["otro"])? $values["otro"] : "";
                        }

                        break;
                        case 'D':
                            $answer_arr[$answer->question->label] =  date('d-m-Y', strtotime($answer->value));
                            break;
                    default:
                        $answer_arr[$answer->question->label] = $answer->value;
                        break;
                }

            }
            $answer_arr["Fecha_Inicio"] =$survey->created_at;
           // $answer_arr["Fecha_Actualización"] =$survey->updated_at;
            $answer_arr["Encuestador"] =$survey->user->name;
           $surveys_arr[] = $answer_arr;

        }
        $d = new DateTime('NOW');

        $name = count($surveys)>0 ? "Resultados " . $surveys[0]->population->name . " [" . $d->format('d M Y H:i') ."].xlsx" : "Sin Encuestas.xlsx";
        $data = new AnswersExport(["surveys" => $surveys_arr, "population_id"=>$population_id, "user_id"=>$user_id]);


        return Excel::download($data , $name);

    }

    public function getheaders(){
        $answer_arr = array();
        $answer_arr["Fecha_Inicio"] ="Fecha creación";
       // $answer_arr["Fecha_Actualización"] ="Fecha Actualización";
        $answer_arr["Encuestador"] ="Encuestador";
        $sections = Section::with("questions.options")->get();
        foreach ($sections as $key => $section) {
            foreach ($section->questions as $key => $question) {
                switch ($question->type) {
                    case 'M':

                        foreach ($question->options as $key => $option) {
                            $answer_arr[$question->label."_".$option->subcode] = $question->text.":". $option->text;
                        }
                        if( $option->isOther){
                            $answer_arr[$question->label."_OTRO"] = $question->text."_OTRO";
                        }

                        break;
                    case 'U':

                        $answer_arr[$question->label] =   $question->text;
                        foreach ($question->options as $key => $option) {
                            if( $option->isOther){
                                $answer_arr[ $question->label."_OTRO"] =  $question->text."_OTRO";
                            }
                        }


                    case 'INS':

                        break;
                    case 'INS':

                        break;
                    default:
                        $answer_arr[$question->label] = $question->text;
                        break;
                }

            }


        }
        return $answer_arr;
    }
}
