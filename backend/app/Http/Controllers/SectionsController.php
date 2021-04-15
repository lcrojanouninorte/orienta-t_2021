<?php

namespace App\Http\Controllers;

use App\Section;
use App\Survey;
use Auth;
use Illuminate\Http\Request;

class SectionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $sections = Section::with("questions.options")->with("questions.conditions.question")->with(['questions' => function ($q)  {
            $q->orderBy('position', "ASC");
        }])->get();
        return response()->success($sections);
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
     * @param  \App\Section  $section
     * @return \Illuminate\Http\Response
     */
    public function show($id, $uuid)
    {
        //TODO: dont show questions for logedin
        $auth_user = Auth::user();

        $survey = Survey::where("uuid",$uuid)->first();

        $sections = Section::where("id", $id)->with(
            ["questions.answers" => function($q) use (  $survey) {
                $q->where('answers.survey_id', '=', $survey->id);
            }])
        ->with("questions.options")->with("questions.conditions.question")->with(['questions' => function ($q)  {
            $q->orderBy('position', "ASC");
        }])->first();
        if(!$auth_user){
            //Show specific columns
            foreach ($sections->questions as $key => $question) {
                if($question->isStaff){
                    unset($sections->questions[$key]);
                }
            }
        }


        //transform answers by type:

            $sections =   $this->formatAnswers($sections);
            $sections->survey =  $survey;


        return response()->json($sections, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Section  $section
     * @return \Illuminate\Http\Response
     */
    public function edit(Section $section)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Section  $section
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Section $section)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Section  $section
     * @return \Illuminate\Http\Response
     */
    public function destroy(Section $section)
    {
        //
    }

    public function formatAnswers($section){

        foreach ($section->questions as $key => $question) {
                $answer_arr = array();
                $answer  = isset($question->answers[0])? $question->answers[0]:array();

                switch ($question->type) {
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

}
