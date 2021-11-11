<?php

namespace App\Imports;

use App\CnoOnet;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
class OnetSheetImport implements OnEachRow, WithHeadingRow
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

        $onet = CnoOnet::firstOrCreate([
            'id' => $rowIndex,
            'title' => $row["onet"],
            'desc' =>  $row["descripcion"],
        ]);

    }
}
