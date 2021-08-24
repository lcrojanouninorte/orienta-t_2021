<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCnoOnetCnoOutputTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cno_onet_cno_output', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cno_classification_level_id');
            $table->unsignedBigInteger('cno_onet_id');
            $table->unsignedBigInteger('cno_output_id');

            $table->foreign('cno_classification_level_id','pps2_id_foreign')
                ->references('id')
                ->on('cno_professional_profiles')
                ->onDelete('cascade');
            $table->foreign('cno_output_id')
                ->references('id')
                ->on('cno_outputs')
                ->onDelete('cascade');
            $table->foreign('cno_onet_id')
                ->references('id')
                ->on('cno_onets')
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
        Schema::dropIfExists('cno_onet_cno_output');
    }
}
