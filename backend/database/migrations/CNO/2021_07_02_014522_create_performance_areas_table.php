<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePerformanceAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('cno_performance_areas')) { return; }

        Schema::create('cno_performance_areas', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->string('code');
            $table->string('title');
            $table->longText('desc');
            $table->string('icon');
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
        Schema::dropIfExists('performance_areas');
    }
}
