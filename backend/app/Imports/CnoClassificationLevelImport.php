<?php

namespace App\Imports;

use App\CnoClassificationLevel;


use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
class CnoClassificationLevelImport implements OnEachRow, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    use Importable;
    public function onRow(Row $row)
    {
        $rowIndex = $row->getIndex()-1; //-1 por el encabezado
        $row      = $row->toArray();

        $onet = CnoClassificationLevel::firstOrCreate([

            'title' => $row["nivel"],
            'desc' =>  $row["descripcion"],
        ]);

    }
}
