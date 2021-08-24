<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOccupationalAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        if (Schema::hasTable('cno_occupational_areas')) { return; }

        Schema::create('cno_occupational_areas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cno_performance_area_id');
            $table->unsignedBigInteger('cno_classification_level_id');
            $table->string('code');
            $table->string('title');
            $table->longText('desc');
            $table->string('icon');

            $table->timestamps();
            $table->foreign('cno_classification_level_id')
                ->references('id')
                ->on('cno_classification_levels')
                ->onDelete('cascade');
            $table->foreign('cno_performance_area_id')
                ->references('id')
                ->on('cno_performance_areas')
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
        Schema::dropIfExists('occupational_areas');
    }
}
