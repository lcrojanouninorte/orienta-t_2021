<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoOccupation extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the CnoOccupation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

    /**
     * Get all of the comments for the CnoOccupation
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function skills()
    {
        return $this->belongsToMany(CnoSkill::class);
    }
    public function knowledges()
    {
        return $this->belongsToMany(CnoKnowledge::class);
    }



    public function pps()
    {
        return $this->belongsTo(CnoProfessionalProfile::class, 'cno_professional_profile_id');
    }


    /**
     * Get the user associated with the CnoOccupation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function onet()
    {
        return $this->belongsTo(CnoOnet::class, "cno_onet_id");
    }


    /**
     * Get the user associated with the CnoOccupation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function level()
    {
        return $this->belongsTo(CnoClassificationLevel::class, "cno_classification_level_id");
    }




}
