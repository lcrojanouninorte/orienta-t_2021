<?php

namespace App\Imports;

use App\CnoPerformanceArea;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
class CnoPerformanceAreaImport implements OnEachRow, WithHeadingRow
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

        $onet = CnoPerformanceArea::firstOrCreate([
            'group' => $row["gran_grupo"],
            'title' =>  $row["nombre"],
            'desc' =>  $row["descripcion"],
        ]);

    }
}
