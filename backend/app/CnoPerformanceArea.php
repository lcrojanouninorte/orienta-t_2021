<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoPerformanceArea extends Model
{
    use HasFactory;
    protected $fillable = [
        "id",	"code",	"title",	"desc", "icon", "group"
    ];

}
