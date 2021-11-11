<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CnoKnowledgeCnoOccupation extends Model
{
    use HasFactory;
    protected $table = 'cno_knowledge_cno_occupation';

    protected $fillable = [
        'id', 'group', 'knowledge_id','occupation_code'
     ];
    public function knowledges()
    {
        return $this->belongsToMany(CnoKnowledge::class);
    }

}
