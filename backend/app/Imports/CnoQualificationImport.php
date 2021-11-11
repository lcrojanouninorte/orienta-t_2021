<?php

namespace App\Imports;

use App\CnoQualification;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;



use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
class CnoQualificationImport  implements OnEachRow, WithHeadingRow
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


        $qual = CnoQualification::firstOrCreate([

            'code' => $row["codigo"],
            'title' => $row["nombre"],

        ]);
        //Create add ocupation

        $qual->occupations()->attach($qual->id,[
            'group' => $row["gran grupo"],
            'occupation_code' => $row["ocupacion"],

        ]);

    }
}
