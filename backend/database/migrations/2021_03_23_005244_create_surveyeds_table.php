<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurveyedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surveyeds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('identification');
            $table->string('first_name');
            $table->string('last_name');
            $table->unsignedBigInteger('survey_id')->nullable();
            $table->foreign('survey_id')
            ->references('id')
            ->on('surveys')
            ->onDelete('set null');
            $table->unsignedBigInteger('population_id')->nullable();
            $table->foreign('population_id')
            ->references('id')
            ->on('populations')
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
        Schema::dropIfExists('surveyeds');
    }
}
