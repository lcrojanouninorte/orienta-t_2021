<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoOccupation extends Model
{
    use HasFactory;
    protected $fillable = [
        'group', 'occupation_code','id',
        'cno_classification_level_id', 'cno_occupational_field_id', 'occupation_code',
        'title', 'desc', 'icon', 'cno_onet_id', 'cno_professional_profile_id'
     ];
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
        return $this->belongsToMany(CnoSkill::class,'cno_occupation_cno_skill', 'occupation_code','cno_skill_id',"occupation_code" )->withPivot( 'group');
    }
    protected $primaryKey = 'id';

    public function knowledges()
    {


        return $this->belongsToMany(CnoKnowledge::class,'cno_knowledge_cno_occupation','occupation_code' , 'cno_knowledge_id','occupation_code' )->withPivot( 'group'); ;
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


    /**
     * Get the user associated with the CnoOccupation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function qualifications()
    {
        return $this->belongsToMany(CnoQualification::class,'cno_occupation_cno_qualification','occupation_code' , 'cno_qualification_id','occupation_code' )->withPivot( 'group');
    }

    /**
     * Get the user associated with the CnoOccupation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function related()
    {
        return $this->belongsToMany(CnoRelated::class,'cno_occupation_cno_related','occupation_code' , 'cno_related_id','occupation_code' )->withPivot( 'group');
    }


}
