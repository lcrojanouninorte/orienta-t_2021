<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoMarket extends Model
{
    use HasFactory;
    protected $fillable =  ['code',
    'men',
    'women',
    'urban',
    'rural',
    'youth',
    'higher_education',
    'average_salary'];
}
