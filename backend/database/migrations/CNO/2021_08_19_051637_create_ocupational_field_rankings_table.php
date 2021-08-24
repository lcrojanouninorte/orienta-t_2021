<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOcupationalFieldRankingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cno_ocupational_field_rankings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('survey_id');
            $table->unsignedBigInteger('cno_professional_profile_id');
            $table->integer('total');
            $table->timestamps();
            $table->foreign('cno_professional_profile_id','pps_id_foreign')
                ->references('id')
                ->on('cno_professional_profiles')
                ->onDelete('cascade');
            $table->foreign('survey_id')
                ->references('id')
                ->on('surveys')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ocupational_field_rankings');
    }
}
