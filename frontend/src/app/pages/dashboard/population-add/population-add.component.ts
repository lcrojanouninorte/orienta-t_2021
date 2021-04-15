import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Population } from '@core/data/remote/schemas/population';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-population-add',
  templateUrl: './population-add.component.html',
  styleUrls: ['./population-add.component.scss']
})
export class PopulationAddComponent implements OnInit {
  public files: Array<File> = [];
  loading: boolean;
  public form: FormGroup;
   progress: number = 0;
  error: boolean;
  message: string;

  constructor(
    private _dialog: NbDialogRef<PopulationAddComponent>,
    private _surveyService: SurveyService,
    private _fb: FormBuilder
    ) {
        this.form = this._fb.group({});
        this.form.addControl( "name", new FormControl('', Validators.required));
    }

  ngOnInit(): void {

  }
  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit(){
    if(this.form.valid){
      //submit session
      this.loading = true;
      const formData = this._surveyService.toFormData(this.form.value);
      if (this.files.length > 0) {
        formData.append('file', this.files[0]);
      }
      this._surveyService.addPopulation(formData)
      .subscribe({
        next: (event => {
            if ( event.type === HttpEventType.UploadProgress ) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            }
            if ( event.type === HttpEventType.Response) {
              if(event.body.type == 1 ){
                this._surveyService.showToast('top rigth', 'success', 'Agregado Correctamente');
                this._dialog.close( new Population().deserialize(event.body.population)  );

              }


              //0: no esta en base de datos
              //1: nombre no coincide con base de datos
              //2: encuesta por terminar
              //3: encuesta terminada.
              //4: nueva encuesta


                if(event.body.type == 2){
                  this.message = "Población no fue creada"
                }
                this.progress = 0;
                this.loading = false;
                this.error = true;
            }
        }),
        error: (error => {
          this._surveyService.showToast('top rigth', 'danger', error);
          this.loading = false;
          this.error = true;
          this.progress = 0;
          this.message =error.message;
        }),
      });

    //  this.stepper.next();

    }else{
      // this.validateAllFormFields(form); //{7}
      //this.stepper.next();
    }
  }
}
