<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCnoKnowledgeCnoOccupation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cno_occupation_cno_knowledge', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('group');

            $table->string('occupation_code');
            $table->unsignedBigInteger('cno_knowledge_id');


            $table->foreign('occupation_code')
                ->references('id')
                ->on('cno_occupations')
                ->onDelete('cascade');
            $table->foreign('cno_knowledge_id')
                ->references('id')
                ->on('cno_knowledges')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cno_occupation_cno_knowledge');
    }
}
