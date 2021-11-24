<?php

namespace App\Imports;

use App\CnoOccupation;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;



use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
class CnoOccupationImport implements    OnEachRow, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    use Importable;
    public function onRow(Row $row)
    {
        $rowIndex = $row->getIndex() -1;
        $row      = $row->toArray();


        $occup = CnoOccupation::firstOrCreate([
            'group' => $row["gran_grupo"],
            'cno_classification_level_id' => $row["nivel_competencia"],
            'occupation_code' => $row["ocupacion"],
            'title' => $row["nombre_ocupacion"],
            'desc' => $row["descripcion_ocupacion"],
            'cno_onet_id' => $row["onet_id"],
            'cno_professional_profile_id' => $row["cod_area"],
            'cno_market_id' => $row["cod_laboral"],
        ]);


    }
}
