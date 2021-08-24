<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ClasificationLevel extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
       //
        DB::table('clasification_levels')->delete();
        Clasificationlevel::create(['id'=>1, 'desc' => 'Nivel de Preparación A']);
        Clasificationlevel::create(['id'=>2, 'desc' => 'Nivel de Preparación B']);
        Clasificationlevel::create(['id'=>3, 'desc' => 'Nivel de Preparación C']);
        Clasificationlevel::create(['id'=>4, 'desc' => 'Nivel de Preparación D']);

    }
}
