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
        $dept = Deparment::where("code",$value)->first();
        return  $dept ? $dept->text : "OTRO";
    }
    public function getMunicipioAttribute($value)
    {
        $town = Town::where("code",$value)->first();
        return $town ? $town->text : "OTRO";
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
