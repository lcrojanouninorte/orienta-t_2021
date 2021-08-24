<?php

namespace App\Http\Controllers;

use App\CnoOccupation;
use App\CnoKnowledge;
use App\CnoOnetCnoOutput;
use App\CnoOutput;

use App\CnoOnet;
use App\CnoProfessionalProfile;
use App\CnoClassificationLevel;
use Illuminate\Http\Request;

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
            ->with(
                array("onet.outputs"=> function($query) use ($occupation) {
                  $query->where('cno_classification_level_id',   $occupation->cno_classification_level_id);
                }))
            ->first();
        //Get outputs

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
}
