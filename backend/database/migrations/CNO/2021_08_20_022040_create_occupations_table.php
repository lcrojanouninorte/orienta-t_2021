<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOccupationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cno_occupations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cno_performance_area_id')->nullable();
            $table->unsignedBigInteger('cno_classification_level_id')->nullable();
            $table->unsignedBigInteger('cno_occupational_field_id')->nullable();
            $table->string('occupation_code');
            $table->string('title');
            $table->longText('desc');
            $table->string('icon');
            $table->unsignedBigInteger('cno_onet_id')->nullable();
            $table->unsignedBigInteger('cno_professional_profile_id')->nullable();
            $table->unsignedBigInteger('cno_market_id')->nullable();
            
            $table->foreign('cno_performance_area_id', 'ppa_id_foreign')
                ->references('id')
                ->on('cno_performance_areas')
                ->onDelete('SET NULL');
                $table->foreign('cno_market_id', 'markets_id_foreign')
                    ->references('id')
                    ->on('cno_markets')
                ->onDelete('SET NULL');
            $table->foreign('cno_professional_profile_id')
                ->references('id')
                ->on('cno_professional_profiles')
                ->onDelete('SET NULL');
            $table->foreign('cno_classification_level_id','clevel_id_foreign')
                ->references('id')
                ->on('cno_classification_levels')
                ->onDelete('SET NULL');
            $table->foreign('cno_occupational_field_id')
                ->references('id')
                ->on('cno_occupational_fields')
                ->onDelete('SET NULL');
            $table->foreign('cno_onet_id')
                ->references('id')
                ->on('cno_onets')
                ->onDelete('SET NULL');

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
        Schema::dropIfExists('occupations');
    }
}
