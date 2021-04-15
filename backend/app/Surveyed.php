<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surveyed extends Model
{
    use HasFactory;
    protected $fillable = ["identification", "first_name", "last_name", "population_id"];

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function survey()
    {
        return $this->hasOne(Survey::class);
    }

}
