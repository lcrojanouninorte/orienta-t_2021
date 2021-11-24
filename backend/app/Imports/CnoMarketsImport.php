<?php

namespace App\Imports;

use App\CnoMarket;
use Maatwebsite\Excel\Concerns\ToModel;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
class CnoMarketsImport implements OnEachRow, WithHeadingRow
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

        $onet = CnoMarket::firstOrCreate([
            'code' => $row["cod_laboral"],
            'men' => $row["hombres"],
            'women' => $row["mujeres"],
            'urban' => $row["urbano"],
            'rural' => $row["rural"],
            'youth' => $row["jovenes_18_a_28_anos"],
            'higher_education' => $row["educacion_superior"],
            'average_salary' => $row["salario_promedio"],

        ]);

    }
}
