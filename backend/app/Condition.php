<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Condition extends Model
{

    use HasFactory;
    protected $hidden = [
        'deleted_at', 'created_at', 'updated_at'
    ];

    public function question()
    {
        return $this->belongsTo(Question::class, 'restriction_id', 'id');
    }
}
