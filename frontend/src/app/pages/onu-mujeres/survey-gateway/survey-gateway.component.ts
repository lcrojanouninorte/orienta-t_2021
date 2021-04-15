import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '@core/data/remote/schemas/survey';
import { User } from '@core/data/remote/schemas/users';
import { SurveyService } from '@core/data/remote/services/survey.service';
import {  NbLayoutScrollService } from '@nebular/theme';

@Component({
  selector: 'ngx-survey-gateway',
  templateUrl: './survey-gateway.component.html',
  styleUrls: ['./survey-gateway.component.scss']
})
export class SurveyGatewayComponent implements OnInit {
  @Output() start = new EventEmitter<boolean>();
  survey: Survey;
  public form: FormGroup;
  public pollster_id: any;
  population_id: string;

  consent;
  survey_id: any;
  loading: boolean;
  state: string;
  pollster: User;
  message: string;
  error: boolean = false;



  constructor(
    private _route:ActivatedRoute,
    private _surveyService: SurveyService,
    private _fb: FormBuilder,
    private _router: Router ,

         private _ly: NbLayoutScrollService
  ) {
    this.start.emit(false);
   }
  myDate = new Date();

  ngOnInit(): void {
    this.form = this._fb.group({});
    this.form.addControl( "complete_name", new FormControl('', Validators.required));
    this.form.addControl( "doc", new FormControl('',Validators.required));
    this.form.addControl( "start_date", new FormControl(this.myDate, Validators.required));
    this.pollster_id = this._route.snapshot.paramMap.get("pollster_id");
    this.population_id = this._route.snapshot.paramMap.get("population_id");

    this._surveyService.getSingleUser( this.pollster_id )
    .subscribe({
      next: (user) => {
        this.pollster = user;
      }
    });

  }

  onSubmit(){
    if(this.form.valid){
      //submit session
      const formData = this._surveyService.toFormData(this.form.value);
      formData.append("pollster_id", this.pollster_id+"");
      formData.append("population_id", this.population_id+"");
      formData.append("section_id", "0");
      this.loading = true;
      this._surveyService.createOrGetSurvey(formData)
      .subscribe({
        next: (event => {

            if ( event.type === HttpEventType.Response) {
              if(event.body.type == 4 || event.body.type  == 3){
                this._surveyService.showToast('top rigth', 'success', 'Bienvenida a la Encuesta');
                this.survey = event.body.survey;
                this.start.emit(true);
                this._router.navigate(["encuesta",1,this.population_id,this.pollster_id,this.survey.uuid]);
              }

              this.loading = false;
              //0: no esta en base de datos
              //1: nombre no coincide con base de datos
              //2: encuesta por terminar
              //3: encuesta terminada.
              //4: nueva encuesta



          this.error = true;
          if(event.body.type == 0){
            this.message = "Actualmente usted no se encuentra registrada en la base de datos."              }
          if(event.body.type == 1){
            this.message = "Uno de los datos proporcionados no es correcto, por favor intente nuevamente."

          }
          if(event.body.type == 2){
            this.message = "Usted ya realizó esta encuesta, gracias por participar."
          }


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

  scrollToTop(){
    this._ly.scrollTo(0,0);


  }

}
