<?php

namespace App\Http\Controllers;

use App\CnoOcupationalFieldRanking;
use Illuminate\Http\Request;
use App\Survey;
use DB;
class CnoOcupationalFieldRankingController extends Controller
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
     * @param  \App\CnoOcupationalFieldRanking  $CnoocupationalFieldRanking
     * @return \Illuminate\Http\Response
     */
    public function show($uuid)
    {
        //
        $this->rank($uuid); //Todo do if not exist.
        $survey = Survey::where("uuid",$uuid )->first();
        $pps = CnoOcupationalFieldRanking::where("survey_id", $survey->id)->with("pps")->orderBy('total', 'DESC')->get();

        //Get Onet List By Ocupations that belongs to pps (ProfessionalProfile)
        foreach ($pps as $key => $pp) {
            $onet = DB::table('cno_occupations')
                ->select('cno_onet_id', 'cno_onets.title','cno_onets.desc','cno_onets.icon')
                ->leftJoin('cno_onets', 'cno_occupations.cno_onet_id', '=', 'cno_onets.id')
                ->where('cno_professional_profile_id', $pp->cno_professional_profile_id)
                ->orderBy( 'cno_onet_id', 'asc')
                ->distinct()
                ->get();

                $pp->pps->onets = $onet;
        }
        return response()->json($pps,200);

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
        // Store totals for specific survey in database
        foreach ($areas_count as $area_id => $area_total) {
            $AreaRank =  CnoOcupationalFieldRanking::where("survey_id", $survey->id);
            $user = CnoOcupationalFieldRanking::updateOrCreate(
                ['survey_id' =>   $survey->id,'cno_professional_profile_id' =>   $area_id],
                ['total' =>   $area_total]
            );

        }



    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CnoOcupationalFieldRanking  $CnoocupationalFieldRanking
     * @return \Illuminate\Http\Response
     */
    public function edit(CnoOcupationalFieldRanking $CnoocupationalFieldRanking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CnoOcupationalFieldRanking  $CnoocupationalFieldRanking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CnoOcupationalFieldRanking $CnoocupationalFieldRanking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CnoOcupationalFieldRanking  $CnoocupationalFieldRanking
     * @return \Illuminate\Http\Response
     */
    public function destroy(CnoOcupationalFieldRanking $CnoocupationalFieldRanking)
    {
        //
    }
}
