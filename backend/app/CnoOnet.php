<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoOnet extends Model
{
    use HasFactory;

    public function outputs()
    {
        return $this->belongsToMany(CnoOutput::class)
        ->withPivot('cno_classification_level_id', 'cno_onet_id');

    }

}
