<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Population extends Model
{
    use HasFactory;

    public function surveyeds()
    {
        return $this->hasMany(Surveyed::class);
    }
    public function surveys()
    {
        return $this->hasMany(Survey::class);
    }
}
