<?php

namespace App;
use Illuminate\Database\Eloquent\Relations\Pivot;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoOnetCnoOutput extends  Pivot
{
    use HasFactory;

    public function outputs()
    {
        return $this->belongsTo(CnoOutput::class, "cno_output_id");
    }
}
