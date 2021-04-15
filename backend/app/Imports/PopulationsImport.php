<?php

namespace App\Imports;

use App\Population;
use Maatwebsite\Excel\Concerns\ToModel;

class PopulationsImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Population([
            //
        ]);
    }
}
