<?php

namespace App\Http\Controllers;

use App\CnoOnet;
use Illuminate\Http\Request;

class CnoOnetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
          //
          $onets = CnoOnet::get();
          return response()->success( $onets);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function outputs()
    {
        //
        $onets = CnoOnet::with("outputs")->get() ;

        $outputs_onets = array();
        foreach ($onets as $key => $onet) {
            foreach ( $onet->outputs as $key => $output) {
                $outputs_onets[] = array(
                    "nivel" =>  $output->pivot->cno_classification_level_id,
                    "onet"=> $onet->title,
                    "Salida" => $output->title);
            }
        }
        return response()->success(  $outputs_onets);
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
     * @param  \App\Onet  $onet
     * @return \Illuminate\Http\Response
     */
    public function show(Onet $onet)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Onet  $onet
     * @return \Illuminate\Http\Response
     */
    public function edit(Onet $onet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Onet  $onet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Onet $onet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Onet  $onet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Onet $onet)
    {
        //
    }
}
