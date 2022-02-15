<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Surveyed extends Model
{
    use HasFactory;
    protected $fillable = ["identification", "first_name", "last_name", "population_id"];
    protected $hidden = [
        'population_id', 'updated_at', 'sector','apellido'
    ];
    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }
    public function getDptoAttribute($value)
    {
        return Deparment::where("code",$value)->first()->text;
    }
    public function getMunicipioAttribute($value)
    {
        return Town::where("code",$value)->first()->text;
    }
    public function survey()
    {
        return $this->hasOne(Survey::class, 'id', 'survey_id');
    }
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

}
