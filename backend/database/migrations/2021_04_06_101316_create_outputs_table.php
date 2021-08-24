<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('outputs', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('classification_level_id');
            $table->unsignedBigInteger('onet_id');
            $table->string('area_formacion');

            $table->foreign('classification_level_id')
                ->references('id')
                ->on('classification_levels')
                ->onDelete('cascade');
            $table->foreign('onet_id')
                ->references('id')
                ->on('onets')
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
        Schema::dropIfExists('outputs');
    }
}
