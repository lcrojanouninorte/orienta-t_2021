<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoProfessionalProfile extends Model
{
    protected $fillable = [
        "id",	"code",	"title",	"desc",	"icon"
    ];

    use HasFactory;
    public function occupations()
    {
        return $this->hasMany(CnoOccupation::class);
    }

    public function onets()
    {
        return $this->hasOneThrough(CnoOccupation::class, CnoOnet::class);


    }
}
