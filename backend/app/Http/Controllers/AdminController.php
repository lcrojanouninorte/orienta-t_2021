<?php

namespace App\Http\Controllers;

use App\CnoOnet;
use App\Admin;
use App\CnoProfessionalProfile;
use App\CnoClassificationLevel;
use App\CnoKnowledge;
use App\CnoKnowledgeCnoOccupation;
use App\CnoOccupationCnoSkill;
use App\CnoSkill;
use App\CnoOccupationCnoQualification;
use App\CnoOccupationCnoRelated;
use App\CnoRelated;
use App\CnoQualification;
use App\CnoPerformanceArea;
use App\CnoMarket;
use App\CnoOccupation;
use Illuminate\Http\Request;
use Storage;
use File;
use Excel;
use  App\Imports\CnoSheetsImport;
use  App\Imports\ExcelUtils;
use DB;
use Illuminate\Support\Facades\Schema;

class AdminController extends Controller
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
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin $admin)
    {
        //
    }


     /**
     * excel_import a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function excel_pre_import(Request $request)
    {
        $response = [];
        $valid_sheets = ['Onets','Perfiles','Niveles','Gran Grupo','Conocimiento','Destreza', 'Cualificacion', 'Afines', 'Ocupacion', 'Mercado Laboral'];
        if($request->hasFile('file') ){
            //Save as temp file


            //Get Sheets Names
            $sh_name_import = new ExcelUtils();
            $sh_name_import->import($request->file('file'));
            $sheets_names = $sh_name_import->getSheetNames();
            $response["system_sheets"] =$valid_sheets;
            $response["detected_sheets"] = $sheets_names;
            $response["invalid_sheets"] = array_diff( $sheets_names,  $valid_sheets);
            $response["valid_sheets"] = array_diff( $valid_sheets,  $response["invalid_sheets"]);
        }

        return response()->json($response,200);

    }

    public function excel_import(Request $request)
    {



        $response = [];
        if($request->hasFile('file') ){
            $selected_sheets =  explode(",", $request->input("selected_sheets"));
            //Get Sheets Names

            //Create Importer for each sheet name
            $import = (new CnoSheetsImport);
            //TODO, dar la posibilidad de seleccionar las hojas a actualizar
            //Teniendo en cuenta las que son obligatorias.
            Schema::disableForeignKeyConstraints();

            foreach ($selected_sheets as $key => $sheet_name) {
                switch ($sheet_name) {
                    case 'Onets':
                        CnoOnet::truncate();
                        $import->onlySheets('Onets');
                        $import->import($request->file('file'));
                    break;
                    case 'Perfiles':
                        CnoProfessionalProfile::truncate();
                        $import->onlySheets('Perfiles');
                        $import->import($request->file('file'));
                    break;
                    case 'Niveles':
                        CnoClassificationLevel::truncate();
                        $import->onlySheets('Niveles');
                        $import->import($request->file('file'));
                    break;
                    case 'Gran Grupo':
                        CnoPerformanceArea::truncate();
                        $import->onlySheets('Gran Grupo');
                        $import->import($request->file('file'));
                        break;
                    case 'Conocimientos':
                        //tipo pivot, se debe guardar los valores unicos, y luego actualiza la pivot
                        CnoKnowledgeCnoOccupation::truncate();
                        CnoKnowledge::truncate();
                        $import->onlySheets('Conocimientos');
                        $import->import($request->file('file'));

                        break;
                    case 'Destreza':
                        //tipo pivot, se debe guardar los valores unicos, y luego actualiza la pivot
                        CnoOccupationCnoSkill::truncate();
                        CnoSkill::truncate();
                        $import->onlySheets('Destreza');
                        $import->import($request->file('file'));

                        break;
                    case 'Cualificacion':
                        //tipo pivot, se debe guardar los valores unicos, y luego actualiza la pivot
                        CnoOccupationCnoQualification::truncate();
                        CnoQualification::truncate();
                        $import->onlySheets('Cualificacion');
                        $import->import($request->file('file'));

                        break;
                    case 'Afines':
                        //tipo pivot, se debe guardar los valores unicos, y luego actualiza la pivot
                        CnoOccupationCnoRelated::truncate();
                        CnoRelated::truncate();
                        $import->onlySheets('Afines');
                        $import->import($request->file('file'));

                        break;
                    case 'Mercado Laboral':
                    //tipo pivot, se debe guardar los valores unicos, y luego actualiza la pivot
                    CnoMarket::truncate();
                    $import->onlySheets('Mercado Laboral');
                    $import->import($request->file('file'));

                    break;
                    default:
                    //Return Message sheet not updated

                        break;
                }
            }
            //Esta tabla se carga de ultimo.
            if(in_array("Ocupacion",$selected_sheets) ){
                //Esta tabla debe ser cargada de ultimo
                CnoOccupation::truncate();
                $import->onlySheets('Ocupacion');
                $import->import($request->file('file'));

            }

            Schema::enableForeignKeyConstraints();
            //Get sumary of each sheet
             //Useing Eloquent
            $response["model_count"] = [
                "Onets" => CnoOnet::count(),
                "Perfil" => CnoProfessionalProfile::count(),
                "Niveles" => CnoClassificationLevel::count(),
                "Gran Grupo"=> CnoPerformanceArea::count(),
                "Conocimientos" => CnoKnowledge::count(),
                "Cualificaciones" => CnoQualification::count(),
                "Destrezas" => CnoSkill::count(),
                "Afines" => CnoRelated::count(),
                "Mercado Laboral" => CnoMarket::count(),
                "Ocupaciones" => CnoOccupation::count(),
            ];


            return response()->json($response,200);
        }


         return response()->json($request,500);

    }

    public function get_models_count(){
        $response["models_count"] = [
            "Onets" => CnoOnet::count(),
            "Perfil" => CnoProfessionalProfile::count(),
            "Niveles" => CnoClassificationLevel::count(),
            "Gran Grupo"=> CnoPerformanceArea::count(),
            "Conocimientos" => CnoKnowledge::count(),
            "Cualificaciones" => CnoQualification::count(),
            "Destrezas" => CnoSkill::count(),
            "Afines" => CnoRelated::count(),
            "Ocupaciones" => CnoOccupation::count(),
        ];


        return response()->json($response,200);
    }
}
