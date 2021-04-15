<?php

namespace App\Http\Controllers;

use App\Population;
use Illuminate\Http\Request;
use Excel;
use Auth;
use DB;
use Storage;
use URL;
use  App\Imports\SurveyedsImport;
class PopulationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $populations = Population::with("surveyeds")->with("surveys")
        ->orderBy('created_at', 'desc')->get();
        return response()->success($populations);
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
        $user = Auth::user();
        $this->validate($request, [
            'name'      => 'required|unique:populations',
            'file'   => 'required',
        ]);
        $population = new Population();
        // Update avatar
        $population->name = $request->name;
        if ($request->hasFile('file')) {
            $fileConv = $request->file('file');
            $destinationPath ="$user->email/";
            $path = $this->storeFile( $fileConv, $destinationPath, 'profiles');
            $population->file_path =   URL::to('/').'/api/uploads/profiles/'.$path->relative;
            if($population->save()){
             //IMPORT EXCEL



                Excel::import(new SurveyedsImport(["population_id"=>$population->id]), $request->file('file'));
                $population = Population::where("id",$population->id)->with("surveyeds")->with("surveys")
                ->orderBy('created_at', 'desc')->first();
                return response()->json(
                [
                    "type"=> 1,
                    "msg"=>"Población Creada Correctamente",
                    "population"=> $population
                ]
                ,200);

            };

            return response()->json(
            [
                "type"=> 2,
                "msg"=>"Población No fue creada Correctamente"
            ]
            ,200);


        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $population = Population::with("surveyeds.survey")->with("surveys")->where("id",  $id)->first();
        return response()->json($population, 200);
    }

    /**
     * activate the specified resource.
     *
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function activate($id)
    {
        //
        Population::where('active',1)->update(['active' => 0]);
        $population = Population::find($id);
        $population->active = true;
        if($population->save()){
            $populations = Population::with("surveyeds")->with("surveys")
            ->orderBy('created_at', 'desc')->get();
            return response()->success($populations);
        }


        return response()->json(Null, 500);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function edit(Population $population)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Population $population)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        //Limit delete of role if no one have it.

        $user = Auth::user();
        $population = Population::find($id);

        if($population->delete()){
            $populations = Population::with("surveyeds")->with("surveys")
            ->orderBy('created_at', 'desc')->get();
            return response()->json($populations,200);
        } else {
            $populations = Population::with("surveyeds")->with("surveys")
            ->orderBy('created_at', 'desc')->get();
            return response()->json($populations,500);
        }
    }

    public function storeFile($file, $destinationPath, $disk){
        $fileCompleteName = $file->getClientOriginalName();
        $fileCompleteName = preg_replace('/\s/', '_', $fileCompleteName  );
         $fileCompleteName = preg_replace('/[()]/', '', $fileCompleteName);
         $fileName = pathinfo($fileCompleteName, PATHINFO_FILENAME);
         $extension = pathinfo($fileCompleteName, PATHINFO_EXTENSION);


        $file_saved = Storage::disk($disk)->put(
            $destinationPath.$fileCompleteName,
            file_get_contents($file->getRealPath())
        );
        return (object) array(
            "base"=>$destinationPath,
            "fileName" => $fileCompleteName,
            "relative" => $destinationPath.$fileCompleteName,
            "full" =>Storage::disk($disk)->path($destinationPath).$fileCompleteName);
    }
}
