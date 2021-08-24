<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOnetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        if (Schema::hasTable('cno_onets')) { return; }
        Schema::create('cno_onets', function (Blueprint $table) {
            $table->bigIncrements('id');
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
        Schema::dropIfExists('onets');
    }
}
