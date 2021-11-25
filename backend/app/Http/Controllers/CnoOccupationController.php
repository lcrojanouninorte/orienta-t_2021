<?php

namespace App\Http\Controllers;

use App\CnoOccupation;
use App\CnoKnowledge;
use App\CnoOnetCnoOutput;
use App\CnoOutput;
use App\Survey;

use App\CnoOnet;
use App\CnoProfessionalProfile;
use App\CnoClassificationLevel;
use Illuminate\Http\Request;
use Mail;
use Auth;
use  App\Imports\CnoKnowledgeImport;

class CnoOccupationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $occupations = CnoOccupation::with("knowledges")->get();
        return response()->success( $occupations);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function knowledges()
    {
        //

        $occupations = CnoOccupation::with("knowledges")->get() ;
        $occupation_knowledges = array();
        foreach ($occupations as $key => $occupation) {
            foreach ( $occupation->knowledges as $key => $knowledge) {
                $occupation_knowledges[] = array("Ocupación"=> $occupation->title,
                                                  "Conocimiento" => $knowledge->title);
            }
        }
        return response()->success(  $occupation_knowledges);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function skills()
    {
        //
        $occupations = CnoOccupation::with("skills")->get() ;
        $occupation_skills = array();
        foreach ($occupations as $key => $occupation) {
            foreach ( $occupation->skills as $key => $skill) {
                $occupation_skills[] = array("Ocupación"=> $occupation->title,
                                                  "Habilidad" => $skill->title);
            }
        }
        return response()->success(  $occupation_skills);
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
     * @param  \App\Occupation  $occupation
     * @return \Illuminate\Http\Response
     */
    public function show($occupation_title)
    {
        //

        //
        //Get onet level to pass parameter en next query
        $occupation = CnoOccupation::where("title", $occupation_title)->first();
        $occupation = CnoOccupation::where("title", $occupation_title)
            ->with("skills")
            ->with("knowledges")
            ->with("qualifications")
            ->with("related")
            ->with("market")
            ->with("knowledges")
            ->with(
                array("onet.outputs"=> function($query) use ($occupation) {
                  $query->where('cno_classification_level_id',   $occupation->cno_classification_level_id);
                }))
            ->first();
        //Get outputs
        $occupation->market->men =   round($occupation->market->men*100,2);
        $occupation->market->women = round($occupation->market->women*100,2);
        $occupation->market->rural = round($occupation->market->rural*100,2);
        $occupation->market->urban = round($occupation->market->urban*100,2);
        $occupation->market->youth = round($occupation->market->youth*100,2);
        $occupation->market->higher_education = round($occupation->market->higher_education*100,2);
        $occupation->market->average_salary = number_format(    $occupation->market->average_salary,2);

        return response()->json($occupation,200);
    }

       /**
     * Display the specified resource.
     *
     * @param  \App\CnoOcupationalFieldRanking  $CnoocupationalFieldRanking
     * @return \Illuminate\Http\Response
     */
    public function showBy($pps_code, $onet_title)
    {


        //
        //Get Onet Id
        $onet = CnoOnet::where("title", $onet_title)->first();
        //Get Pps Id

        //getGroup

        $pps = CnoProfessionalProfile::where("code", $pps_code)->first();

        $occupation_list = CnoClassificationLevel::with(
            array("occupations"=> function($query) use ($onet, $pps) {
              $query->where('cno_onet_id',   $onet->id);
              $query->where('cno_professional_profile_id',   $pps->id);
            })
        )->get();

        return response()->json($occupation_list,200);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Occupation  $occupation
     * @return \Illuminate\Http\Response
     */
    public function edit(Occupation $occupation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Occupation  $occupation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Occupation $occupation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Occupation  $occupation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Occupation $occupation)
    {
        //
    }


    public function  cno_occupation_mail(Request $request)
    {


        $user = Auth::user();
        //Get user Survey

        $survey = Survey::with("surveyed")->where("user_id",  $user->id)->first();


        $occupation_title = $request->input("occupation_title")  ;


        //Buscar codigo de
        if($user){
          $data = array(
                        'email' =>  $user->email,
                        'nombre' => $survey->surveyed->nombre,
                        'occupation_title' => $occupation_title,
                        'survey' => $survey
                    );
            Mail::send('emails.perfil', $data, function ($message) use ($data) {

                $message->from('contacto@orienta-t.co', 'Orienta-t');

                $message->to( $data["email"])->subject('Perfil Ocupacional - Orienta-T'); //Cambiar fecha

            });

        }else{
            return response()->json("El usuario no esta autenticado",500);
           // return redirect()->route('login');
          // Session::flash('alert-error', 'Mensaje No Enviado. Intente nuevamente');
        }
        return response()->json("Enviado cocrrectamente",200);
       // return back()->with('message', 'success|Record updated.');
    }


}
