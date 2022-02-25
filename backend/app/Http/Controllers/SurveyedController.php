<?php

namespace App\Http\Controllers;

use App\Surveyed;
use App\Survey;

use App\Deparment;
use App\Town;
use Carbon\Carbon;

use App\CnoOcupationalFieldRanking;
use App\CnoProfessionalProfile;
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
          //
          $surveyeds = Surveyed::with("survey")->get()->makeHidden(['user', 'survey','survey_id']);

          //Get user email and name


          //add 3 most rated profile rank of each surveyed
            foreach ($surveyeds as $key => $surveyed) {
                # code...

                $survey = $surveyed->survey;

                if($survey){
                    $pps = CnoOcupationalFieldRanking::where("survey_id", $survey->id)->with("pps")->orderBy('total', 'DESC')->get();
                    if( $pps->count()>0){
                            $surveyed->perfil_1 = $pps[0]->pps->title;
                            $surveyed->perfil_2 = $pps[1]->pps->title;
                            $surveyed->perfil_3 = $pps[2]->pps->title;
                            $surveyed->save();
                    }
                    $surveyed->link = "http://orienta-t.co/#/perfil/areas/" . $survey->uuid;
                    $surveyed->estado_encuesta =  $survey->isFinished ? "Finalizada": "Pendiente";
                }
                //Agregar campos faltantes
                $surveyed->email = $surveyed->user->email;

            }




          return response()->success( $surveyeds);

    }

    public function done_and_pendings($surveys)
    {
        $pendings = 0;
        $finished = 0;
        foreach ($surveys as $key => $survey) {
            if($survey->estado_encuesta == "Finalizada"){
                $finished++;
            }
            if($survey->estado_encuesta == "Pendiente"){
                $pendings++;
            }
        }

        return ["finished" => $finished, "pendings" => $pendings];
        //Contar atributo estado_encuesta
    }
    public function profiles_count($surveys)
    {
        //GEt all PPS
        $db_pps = CnoProfessionalProfile::all();
        $profiles = [];
        $dptos = [];
        $mnpo = [];
        $institution = [];
        $students = [];
        $grado = [];
        $estrato = [];
        $edad = [];
        foreach ($db_pps as $key => $profile) {
            $profiles[$profile->title] = 0;
        }

        foreach ($surveys as $key => $survey) {
            $profiles[$survey->perfil_1]++;
            $students[] = ["id" => $survey->user_id,"name"=>  $survey->nombre, "perfil_1"=>$survey->perfil_1,  "perfil_2"=>$survey->perfil_2, "perfil_3"=>$survey->perfil_3, "link" => $survey->link];
            isset($dptos[$survey->dpto]) ? $dptos[$survey->dpto]++ :  $dptos[$survey->dpto] = 1 ;
            isset($mnpo[$survey->municipio]) ? $mnpo[$survey->municipio]++ :  $mnpo[$survey->municipio] = 1 ;
            isset($institution[$survey->institucion]) ? $institution[$survey->institucion]++ :  $institution[$survey->institucion] = 1 ;
            isset($grado[$survey->grado]) ? $grado[$survey->grado]++ :  $grado[$survey->grado] = 1 ;
            isset($estrato[$survey->estrato]) ? $estrato[$survey->estrato]++ :  $estrato[$survey->estrato] = 1 ;
            isset($edad[$survey->edad]) ? $edad[$survey->edad]++ :  $edad[$survey->edad] = 1 ;

        }

        //convert to key => value
        $profiles = $this->array_to_obj($profiles,"profile");
        $dptos = $this->array_to_obj($dptos,"dpto");
        $mnpo = $this->array_to_obj($mnpo,"mnpo");
        $institution = $this->array_to_obj($institution,"institut");
        $grado = $this->array_to_obj($grado,"grado");
        $estrato = $this->array_to_obj($estrato,"estrato");
        $edad = $this->array_to_obj($edad,"edad");

        //convert to array

        return   ["profiles" => $profiles ,
         "dptos"=>$dptos,
         "institution"=>$institution,
         "mnpo"=>$mnpo,
         "students"=> $students,
         "grado"=> $grado,
         "estrato"=> $estrato,
         "edad"=> $edad,
        ];
        //Crear Query que agrupe por p1.
    }

    public function array_to_obj($arr, $filter){
        $obj = collect([]);
        foreach ($arr as $name => $value) {
            $obj->add(["name"=>$name, "value"=>$value, "extra"=>["filter" => $filter]]);

        }

        return  $obj->sortByDesc('value')->values()->all();

    }


    public function stats(Request $request)
    {
        //
          // Filtrar por fecha inicio y fin seleccionadas

          //Verificar
          $dpto = $request->input('dpto') ?  $request->input('dpto') : null;
          $mnpo = $request->input('mnpo') ?  $request->input('mnpo') : null ;
          $institut = $request->input('institut') ?  $request->input('institut') : null;
          $profile = $request->input('profile') ?  $request->input('profile') : null;
          $institut = $request->input('institut') ?  $request->input('institut') : null;
          $edad = $request->input('edad') ?  $request->input('edad') : null;
          $grado = $request->input('grado') ?  $request->input('grado') : null;
          $estrato = $request->input('estrato') ?  $request->input('estrato') : null;

          $start = $request->input('start') ?  Carbon::parse($request->input('start')): null;
          $end = $request->input('end') ? Carbon::parse($request->input('end')) : null;

          // Ultimos estudiantes / Lista estudiantes
          // edad
          // Grados


          //Find DPTO and MUN if given
          //CASO OTRO.
          $dpto = Deparment::where("text",  $dpto )->first();
          $dpto =   $dpto ? $dpto->code : null ;
          $mnpo = TOWN::where("text", $mnpo )->first();
          $mnpo =   $mnpo ? $mnpo->code : null;



          $surveyeds = Surveyed::with("survey")
            ->when( $dpto, function ($query) use ($dpto) {
                return $query->where('dpto',$dpto);
            })
            ->when( $mnpo, function ($query) use ($mnpo) {
                return $query->where('municipio',$mnpo);
            })
            ->when( $institut, function ($query) use ($institut) {
                return $query->where('institucion',$institut);
            })
            ->when( $profile, function ($query) use ($profile) {
                return $query->where('perfil_1',$profile);
            })
            ->when( $edad, function ($query) use ($edad) {
                return $query->where('edad', $edad);
            })
            ->when( $grado, function ($query) use ($grado) {
                return $query->where('grado',$grado);
            })
            ->when($estrato, function ($query) use ($estrato) {
                return $query->where('estrato', $estrato);
            })
            ->when( [$start, $end], function ($query) use ($start,$end) {
                return $query->whereBetween('created_at', [$start,$end]);
            })

            ->get()->makeHidden(['user', 'survey','survey_id']);
          //Get user email and name


                //TODO: MOVE TO LOGIAL PLACE
             //add 3 most rated profile rank of each surveyed
            foreach ($surveyeds as $key => $surveyed) {
                # code...

                $survey = $surveyed->survey;

                if($survey){
                    $pps = CnoOcupationalFieldRanking::where("survey_id", $survey->id)->with("pps")->orderBy('total', 'DESC')->get();
                    if( $pps->count()>0){
                            $surveyed->perfil_1 = $pps[0]->pps->title;
                            $surveyed->perfil_2 = $pps[1]->pps->title;
                            $surveyed->perfil_3 = $pps[2]->pps->title;
                            $surveyed->save();
                    }
                    $surveyed->link = "http://orienta-t.co/#/perfil/areas/" . $survey->uuid;
                    $surveyed->estado_encuesta =  $survey->isFinished ? "Finalizada": "Pendiente";
                }
                //Agregar campos faltantes
                $surveyed->email = $surveyed->user->email;

            }


       //     $response["surveys"] =  $surveyeds;
       $response["surveys_count"] =  $this->done_and_pendings($surveyeds);
       $response["profile_count"] =  $this->profiles_count( $surveyeds);
       $response["request"]  =  $request->input();
          return response()->success(       $response);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function surveyedWithFirstArea()
    {
        //
          //
          $surveyed = Surveyed::get();
          //TODO: get caracterization data from survey answers

          return response()->success( $surveyed);

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

    public function tutorials(){
        return [
            [
                "title" => "1. Cómo Ingresar al Módulo administrativo?",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/1.png",
                "doc_url" => "",
                "difficulty" => "Fácil"
            ],
            [
                "title" => "2. Cómo utilizar el Dashboard?",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/2.png",
                "doc_url" => "",
                "difficulty" => "Fácil"
            ],
            [
                "title" => "3. Cómo Utilizar Tabla Dinámica?",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/3.png",
                "doc_url" => "",
                "difficulty" => "Medio"
            ],
            [
                "title" => "4. Cómo descargar base de datos?",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/4.png",
                "doc_url" => "",
                "difficulty" => "Fácil"
            ],
            [
                "title" => "5. Cómo Crear Usuario Administrador?",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/5.png",
                "doc_url" => "",
                "difficulty" => "Medio"
            ],
            [
                "title" => "6. Cómo editar, borrar o crear usuarios?.",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/6.png",
                "doc_url" => "",
                "difficulty" => "Facíl"
            ],
            [
                "title" => "7. Servidor y Dominio.",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/7.png",
                "doc_url" => "",
                "difficulty" => "Difícil"
            ],

            [
                "title" => "8. Registro y Recuperación de contraseña",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/8.png",
                "doc_url" => "",
                "difficulty" => "Facíl"
            ],
            [
                "title" => "9. Cómo realizar la encuesta?",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/9.png",
                "doc_url" => "",
                "difficulty" => "Facíl"
            ],
            [
                "title" => "10. Cómo ver los resultados.",
                "desc" => "Disponible el 28 de Febrero de 2022",
                "video_url" => "https://youtube.com",
                "image_url" => "https://www.orienta-t.co/assets/img/tutoriales/10.png",
                "doc_url" => "",
                "difficulty" => "Facíl"
            ],


        ];
    }
}
