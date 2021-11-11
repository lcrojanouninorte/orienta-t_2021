<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoClassificationLevel extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'code','title','desc'
    ];
    /**
     * Get all of the comments for the CnoClassificationLevel
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function occupations()
    {
        return $this->hasMany(CnoOccupation::class, "cno_classification_level_id");
    }
}
