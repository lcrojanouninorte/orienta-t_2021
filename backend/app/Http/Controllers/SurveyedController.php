<?php

namespace App\Http\Controllers;

use App\Surveyed;
use Illuminate\Http\Request;
use DB;
class SurveyedController extends Controller
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

        $messages = [
            'data.ip.unique' => 'Given ip and hostname are not unique',
        ];

        //
       // $user = Auth::user();
       $this->validate($request, [
        'population_id'     => 'required',
        'name'     => 'required',
        'identification'     => 'required|unique:surveyeds',
    ]);


    DB::beginTransaction();
    try {
        $surveyed = new Surveyed();
        $surveyed->population_id = $request->input("population_id");
        $surveyed->first_name = $request->input("name");
        $surveyed->last_name = "";

        $surveyed->identification = $request->input("identification");
        DB::commit();
       if($surveyed->save()){
           return response()->json($surveyed,200);
       }
       return response()->json($surveyed,500);


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
     * @param  \App\Surveyed  $surveyed
     * @return \Illuminate\Http\Response
     */
    public function show(Surveyed $surveyed)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Surveyed  $surveyed
     * @return \Illuminate\Http\Response
     */
    public function edit(Surveyed $surveyed)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Surveyed  $surveyed
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Surveyed $surveyed)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Surveyed  $surveyed
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

        //Limit delete of role if no one have it.
        $surveyed = Surveyed::find($id);

        if($surveyed->delete()){
            return response()->json("OK",200);
        } else {
            return response()->json("No se pudo eliminar",500);
        }



    }
}
