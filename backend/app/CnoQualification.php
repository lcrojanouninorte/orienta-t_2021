<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoQualification extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';

    protected $fillable = [
       'id', 'title', 'code'
    ];

    public function occupations()
    {
        $this->pirmaryKey = 'occupation_code';

        return $this->belongsToMany(CnoOccupation::class, 'cno_occupation_cno_qualification', 'cno_qualification_id', 'occupation_code')
        ->withPivot('occupation_code','group');
        ;
    }
}
