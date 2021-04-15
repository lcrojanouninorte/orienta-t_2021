<?php

namespace App\Exports;

use App\Answer;
use App\Section;

use App\Survey;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStrictNullComparison;

class AnswersExport implements FromArray, WithHeadings, WithStrictNullComparison//FromView,
{
    /**
    * @return \Illuminate\Support\Collection
    */

    protected $data;

    public function __construct(array $data = [] )
    {
        $this->data  = $data;

    }
    public function array(): array
    {
        return $this->data["surveys"];
    }
    public function headings(): array
	{
        if($this->data["surveys"]){

            return array_keys($this->data["surveys"][0]);
        }
        return [];
	}
   /* public function view(): View
    {

        $sections = Section::with("questions.options")->with("questions.conditions.question")->with(['questions' => function ($q)  {
            $q->whereNotIn('type', ['INS'])
            ->orderBy('position', "ASC");
        }])->get();
        return view('report', [
            'sections' => $sections
        ]);

    }*/

}
