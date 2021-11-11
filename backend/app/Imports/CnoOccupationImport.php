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
            'group' => $row["gran grupo"],
            'cno_classification_level_id' => $row["nivel competencia"],
            'occupation_code' => $row["ocupacion"],
            'title' => $row["nombre"],
            'desc' => $row["descripcion"],
            'cno_onet_id' => $row["ONET_ID"],
            'cno_professional_profile_id' => $row["cod_area"],
        ]);


    }
}
