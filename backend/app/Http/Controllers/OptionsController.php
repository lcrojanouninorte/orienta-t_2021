<?php

namespace App\Http\Controllers;

use App\Option;
use Illuminate\Http\Request;
use App\Question;
use App\Log;

use Auth;

class OptionsController extends Controller
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

            //
            $user = Auth::user();
            $this->validate($request, [
                'text'     => 'required',
                'question_id'     => 'required',
            ]);



            $opt = new Option();
            $opt->text = $request->input('text');
            $opt->question_id = $request->input('question_id');
            $subcode = Option::where('question_id',$opt->question_id)->count() + 1;
            $opt->subcode = $subcode;
            $opt->value = $subcode;

           if($opt->save() ){

                $log = new Log;
                $log->user_id = $user->id;
                $log->table = "options";
                $log->desc = "User ($user->id, $user->name): CREATED  ";
                $log->table_id = $opt->id;
                $log->desc = $log->desc." Option ($opt->id, $opt->text).";
                $log->save();
                //$q = Question::with('options')->whereIn('id', $opt->question_id)->get();
                return response()->json($opt,200);
           }
        return response()->json("Error",500);



    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Option  $option
     * @return \Illuminate\Http\Response
     */
    public function show(Option $option)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Option  $option
     * @return \Illuminate\Http\Response
     */
    public function edit(Option $option)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Option  $option
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Option $option)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Option  $option
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        //
        if(Option::destroy($id)){

            return response()->json("ok",200);
        };

        return response()->json("error",500);

    }
}
