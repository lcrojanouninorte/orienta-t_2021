<?php

namespace App\Exports;

use App\CnoKnowledges;
use Maatwebsite\Excel\Concerns\FromCollection;

class CnoKnowledgeExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return CnoKnowledges::all();
    }
}
