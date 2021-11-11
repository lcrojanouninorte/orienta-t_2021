<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCnoOccupationCnoQualificationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('cno_occupation_cno_qualification')) { return; }

        Schema::create('cno_occupation_cno_qualification', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('group');
            $table->string('occupation_code');
            $table->unsignedBigInteger('cno_qualification_id');


            $table->foreign('occupation_code')
                ->references('occupation_code')
                ->on('cno_occupations')
                ->onDelete('cascade');
            $table->foreign('cno_qualification_id')
                ->references('id')
                ->on('cno_qualifications')
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
        Schema::table('cno_occupation_cno_qualification', function (Blueprint $table) {
            //
        });
    }
}
