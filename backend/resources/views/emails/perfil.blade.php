<div class="row principal  blue darken-4">
	<div class="container">
<h1>Plataforma de Orientación Ocupacional - Orienta-T</h1>

	<div class="row">
        <div class="col s12">
          <div class="card ">
            <div class="card-content ">
              <span class="card-title"></span>


              		<div class="col m12">
                        <h2>Hola <b>{{$nombre}}</b>! ,</h2>
                          <p>
							Aquí puedes encontrar la ocupación que seleccionaste,
						</p>
                        <h3><a style="font-weight: bold;" class="waves-effect waves-light btn" href="https://orienta-t.co/#/perfil/ocupacion/{{$occupation_title}}">{{$occupation_title}}</a></h3>
						<br>


                        <p>Las tres áreas más afines a tu perfil son:</p>
                        <b>{{$survey->surveyed->p1}}, {{$survey->surveyed->p2}} y {{$survey->surveyed->p3}}</b>
                        <p>Sigue navegando por cada área en este enlace:</p>
						<h3><a style="font-weight: bold;" class="waves-effect waves-light btn" href="https://orienta-t.co/#/perfil/areas/{{$survey->uuid}}"> Áreas afines </a></h3>


						<h3>Agradecemos su participación.</h3>



					</div>
            </div>

          </div>
        </div>
      </div>


	</div>
<!--	<div class="col m12 center-align">
		<a href="http://www.uninorte.edu.co/" target="_blank"><img alt="Uninorte" src="http://orienta-t.co/logos/uninorte.png" width=32 height=32  /></a>
		<a href="http://www.promigas.com" target="_blank"><img src="http://orienta-t.co/logos/promigas.jpg" width=32 height=32 alt="promigas" /></a>
		<a href="http://www.camarabaq.org.co/" target="_blank"><img alt="camarabaq" src="http://orienta-t.co/logos/camaracomercio.png" width=32 height=32  /></a>
	</div>-->

</div>
