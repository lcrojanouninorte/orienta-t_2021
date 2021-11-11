<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoOccupationCnoSkill extends Model
{
    use HasFactory;
    protected $table = 'cno_occupation_cno_skill';

    protected $fillable = [
        'id', 'group', 'skill_id','occupation_code'
     ];
    public function knowledges()
    {
        return $this->belongsToMany(CnoKnowledge::class);
    }

}
