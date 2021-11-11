<?php

namespace App\Imports;

use App\CnoRelated;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;



use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
class CnoRelatedImport implements  OnEachRow, WithHeadingRow
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


        $related = CnoRelated::firstOrCreate([

            'occupation_code' => $row["ocupacion afin"],
            'title' => $row["nombre"],
        ]);
        //Create add ocupation knowledge

        $related->occupations()->attach($related->id,[
            'group' => $row["gran grupo"],
            'occupation_code' => $row["ocupacion"],

        ]);

    }

}

