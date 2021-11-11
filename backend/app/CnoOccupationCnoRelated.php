<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoOccupationCnoRelated extends Model
{
    use HasFactory;
    protected $table = 'cno_occupation_cno_related';

    protected $fillable = [
        'id', 'group', 'related_id','occupation_code'
     ];
}
