<?php

namespace App\Imports;

use App\Surveyed;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;

class SurveyedsImport implements ToModel, WithHeadingRow, WithBatchInserts
{
    private $data;
    public function __construct(array $data = [])
    {
        $this->data = $data;
    }

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Surveyed([
            'identification'  => $row['id'],
            'first_name' => $row['nombre'],
            'last_name'    => "",
            'population_id'    => $this->data["population_id"],
        ]);
    }
    public function batchSize(): int
    {
        return 50;
    }
}
