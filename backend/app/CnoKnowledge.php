<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoKnowledge extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';

    protected $fillable = [
       'id', 'title'
    ];

    public function occupations()
    {
        $this->pirmaryKey = 'occupation_code';

        return $this->belongsToMany(CnoOccupation::class, 'cno_knowledge_cno_occupation', 'cno_knowledge_id', 'occupation_code')
        ->withPivot('occupation_code','group');
        ;
    }
}
