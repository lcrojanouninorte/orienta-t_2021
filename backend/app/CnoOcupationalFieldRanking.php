<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoOcupationalFieldRanking extends Model
{
    use HasFactory;
    protected $fillable = ["survey_id", "cno_professional_profile_id", "total"];

    public function pps()
    {
        return $this->belongsTo(CnoProfessionalProfile::class, "cno_professional_profile_id");
    }



}
