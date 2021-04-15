<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;
    protected $fillable = ['survey_id', 'question_id', 'value'];
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
