<?php

namespace App\Imports;

use App\CnoSkill;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;



use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;

class CnoSkillImport implements OnEachRow, WithHeadingRow
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


        $skill = CnoSkill::firstOrCreate([

            'title' => $row["nombre_destreza"],
        ]);
        //Create add ocupation knowledge

        $skill->occupations()->attach($skill->id,[
            'group' => $row["gran_grupo"],
            'occupation_code' => $row["ocupacion"],

        ]);

    }

}

