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
        if (Schema::hasTable('surveyeds')) { return; }

        Schema::create('surveyeds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('nombre')->nullable();
            $table->string('apellido')->nullable();
            $table->string('estrato')->nullable();
            $table->string('dpto')->nullable();
            $table->string('municipio')->nullable();
            $table->string('institucion')->nullable();
            $table->string('sector')->nullable();
            $table->string('telefono')->nullable();
            $table->string('edad')->nullable();
            $table->string('grado')->nullable();
            $table->string('direccion')->nullable();

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
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
