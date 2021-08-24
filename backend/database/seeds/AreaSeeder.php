<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('areas')->delete();

        Area::create(['id'=> 1, 'cod_area'=> 'ICE', 'desc_area' => 'Investigación en Ciencias Exactas: Ciencias exactas y básicas como Matemáticas, Física, Química, biología, Geología. ']);
        Area::create(['id'=> 2, 'cod_area'=> 'ICH', 'desc_area' => 'Investigación en Ciencias Humanas: Ciencias relacionadas con el estudio del hombre, tales como Antropología, filosofía, psicología, sociología, teología, pedagogía. ']);
        Area::create(['id'=> 3, 'cod_area'=> 'ATC', 'desc_area' => 'Aplicaciones Tecnico-Cientificas: Ciencia especializada en la aplicación técnica y científica de las distintas disciplinas. ']);
        Area::create(['id'=> 4, 'cod_area'=> 'ART', 'desc_area' => 'Artísticas: Arte puro (pintura, escultura, danza, ritmo, teatro) y Arte Aplicado (dibujo técnico, decoración, publicidad). ']);
        Area::create(['id'=> 5, 'cod_area'=> 'MUS', 'desc_area' => 'Musicales: Cualquier profesión relacionada con la música. ']);
        Area::create(['id'=> 6, 'cod_area'=> 'GHI', 'desc_area' => 'Geografía-Historia: Arqueología, archivero, bibliotecario, conservador de museos. ']);
        Area::create(['id'=> 7, 'cod_area'=> 'LIF', 'desc_area' => 'Literario-Filológicas: Relacionadas con la literatura clásica o moderna, artística e informativa. ']);
        Area::create(['id'=> 8, 'cod_area'=> 'ECE', 'desc_area' => 'Económico Empresarial: Relacionado con el trabajo en empresas y el estudio de la economía. ']);
        Area::create(['id'=> 9, 'cod_area'=> 'INF', 'desc_area' => 'Informática: Analista de aplicaciones, sistemas y programación. ']);
        Area::create(['id'=> 10, 'cod_area'=> 'EDU', 'desc_area' => 'Educativas: Ciencia relacionada con la educación, orientación escolar, pedagogía y psicología educativa. ']);
        Area::create(['id'=> 11, 'cod_area'=> 'AME', 'desc_area' => 'Asistencias-Medicinales: Medicina y ciencias de la salud.']);
        Area::create(['id'=> 12, 'cod_area'=> 'ARP', 'desc_area' => 'Actividades Públicas-Relación y Persuasión']);
        Area::create(['id'=> 13, 'cod_area'=> 'RIA', 'desc_area' => 'Riesgo y Acción, Actividades relacionadas con altos niveles de riesgo, esfuerzo físico o deportes. ']);

    }
}
