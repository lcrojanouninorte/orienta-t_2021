import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '@core/data/remote/schemas/survey';
import { User } from '@core/data/remote/schemas/users';
import { AuthService } from '@core/data/remote/services/auth.service';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {
  public form: FormGroup;
  public pollster_id: any;
  public population_id: string;
  loading: boolean;
  error: boolean;
  message: string;
  survey: any;
  user: User;
  progress: 50;
  constructor(
    private _fb: FormBuilder,
    private _router: Router ,
    private _route:ActivatedRoute,
    private _surveyService: SurveyService,
    private _authService: AuthService,
    ) {

      _authService.getCurrentUser().subscribe(
        (user) => {
          this.user = user;
        }
      );
    }
      example_question = {
        id:1,
        text: `Me gustaría ir a una charla sobre:`,
        code: "1",
        options:[
          { question_id:1,
            text: `Cómo influye la sociedad a grupos minoritarios, como por ejemplo, personas en
                  situación de pobreza, personas con discapacidad, entre otros.`,
            value:"",
            code: 1,
          },
          {
            question_id:1,
            text: `Influencia de la música rock en la vida moderna.`,
            value:"",
            code: 2,
          },
          {
            question_id:1,
            text: `Cómo dirigir y organizar el personal de una empresa.`,
            value:"",
            code: 3,
          },{
            question_id:1,
            text: `Formas de tratamiento o apoyo para personas que tienen dificultades con abuso de sustancias, como por ejemplo, drogas o alcohol.`,
            value:"",
            code: 4,
          }
        ]

      };

  ngOnInit(): void {
    this.form = this._fb.group({});
    this.getSurvey(this.user.id);
   }

  start(){
    // Load Survey By Creating a survey in the server and returning an uuid for this user.
    if(this.form.valid){
      //submit session
      const formData = this._surveyService.toFormData(this.form.value);
      this.loading = true;
      this._surveyService.createOrGetSurvey(formData)
      .subscribe({
        next: (event => {
            if ( event.type === HttpEventType.Response) {
              if(event.body.type == 4 || event.body.type  == 3){
                this._surveyService.showToast('top rigth', 'info', 'Bienvenido a Orienta-T');
                this.survey = event.body.survey;
                this._router.navigate(["encuesta/1", this.survey.uuid]);

              }else{
                //0: no esta en base de datos
                //1: nombre no coincide con base de datos
                //2: encuesta por terminar
                //3: encuesta terminada.
                //4: nueva encuesta
                this.error = true;
                if(event.body.type == 0){
                  this.message = "Actualmente usted no se encuentra registrado en la base de datos."              }
                if(event.body.type == 1){
                  this.message = "Uno de los datos proporcionados no es correcto, por favor intente nuevamente."

                }
                if(event.body.type == 2){
                  this.message = "Usted ya realizó esta encuesta, gracias por participar."
                }
              }
              this.loading = false;



            }



        }),
        error: (error => {
          this._surveyService.showToast('top rigth', 'danger', error);
          this.loading = false;
          this.error = true;
          this.message =error.message;
        }),
      });

    //  this.stepper.next();

    }else{
      // this.validateAllFormFields(form); //{7}
      //this.stepper.next();
    }




  }

  continue(){
    // load Survey based on user uuid if exist.
  }
  getSurvey(user_id) {
    this.loading = true;
    this._surveyService.getSurvey(user_id).subscribe({
      next: (survey: Survey) => {
        this.survey = survey;
        this.loading = false;
      },
    });
  }
}
