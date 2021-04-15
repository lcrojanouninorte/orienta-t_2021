<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $appends = ['label'];

    /**
     * Get the comments for the blog post.
     */
    public function options()
    {
        return $this->hasMany(Option::class);
    }
    public function conditions()
    {
        return $this->hasMany(Condition::class);
    }
    public function answers()
    {
        return $this->hasMany(Answer::class, "question_id","id");
    }
    public function section()
    {
        return $this->belongsTo('App\Section');
    }
    function label() {
        return $this->section->code."_".$this->code ;
    }
    public function getLabelAttribute()
    {
        return $this->label();
    }

}
