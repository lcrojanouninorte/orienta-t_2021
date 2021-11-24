<?php

namespace App\Imports;

use App\CnoKnowledge;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;



use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;


class CnoKnowledgeImport implements OnEachRow, WithHeadingRow
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


        $knowledge = CnoKnowledge::firstOrCreate([
            'title' => $row["nombre_conocimiento"],
        ]);
        //Create add ocupation knowledge

        $knowledge->occupations()->attach($knowledge->id,[
            'group' => $row["gran_grupo"],
            'occupation_code' => $row["ocupacion"],

        ]);

    }

}
