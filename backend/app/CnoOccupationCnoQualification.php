<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoOccupationCnoQualification extends Model
{
    use HasFactory;
    protected $table = 'cno_occupation_cno_qualification';

    protected $fillable = [
        'id', 'group', 'qualification_id','occupation_code'
     ];
}
