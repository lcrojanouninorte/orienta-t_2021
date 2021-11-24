<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\Importable;
class CnoSheetsImport implements WithMultipleSheets
{
    use WithConditionalSheets, Importable;
    public function conditionalSheets(): array    {
        return [
            'Onets' => new OnetSheetImport(),
            'Perfiles' => new CnoProfessionalProfileImport(),
            'Niveles' => new CnoClassificationLevelImport(),
            'Gran Grupo' => new CnoPerformanceAreaImport(),
            'Conocimientos' => new CnoKnowledgeImport(),
            'Destreza' => new CnoSkillImport(),
            'Cualificacion' => new CnoQualificationImport(),
            'Afines' => new CnoRelatedImport(),
            'Ocupacion' => new CnoOccupationImport(),
            'Mercado Laboral' => new CnoMarketsImport(),
        ];
    }
}
