<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOccupationalFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        if (Schema::hasTable('cno_occupational_fields')) { return; }

        Schema::create('cno_occupational_fields', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cno_occupational_area_id');
            $table->string('code');
            $table->string('title');
            $table->longText('desc');
            $table->string('icon');

            $table->timestamps();
            $table->foreign('cno_occupational_area_id')
                ->references('id')
                ->on('cno_occupational_areas')
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
        Schema::dropIfExists('occupational_fields');
    }
}
