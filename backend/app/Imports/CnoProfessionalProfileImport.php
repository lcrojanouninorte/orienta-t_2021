<?php

namespace App\Imports;

use App\CnoProfessionalProfile;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\OnEachRow;
class CnoProfessionalProfileImport implements  OnEachRow, WithHeadingRow
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

        $knowledge = CnoProfessionalProfile::firstOrCreate([
            'id' =>  $row["id"],
            'code' => $row["codigo"],
            'title' =>  $row["titulo"],
            'desc' =>  $row["descripcion"],
            'icon' =>  $row["icono"],
        ]);



    }
}
