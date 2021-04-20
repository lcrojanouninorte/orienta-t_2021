<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;

    public function surveyed()
    {
        return $this->belongsTo(Surveyed::class);
    }
    public function population()
    {
        return $this->belongsTo(Population::class);
    }
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
    public function questions()
    {
        return $this->hasMany(Question::class, 'template_id', 'template_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
