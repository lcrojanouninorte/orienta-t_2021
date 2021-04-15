import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Option } from '@core/data/remote/schemas/option';
import { Question } from '@core/data/remote/schemas/question';
import { Section } from '@core/data/remote/schemas/section';
import { SurveyService } from '@core/data/remote/services/survey.service';
import { NbAccessChecker } from '@nebular/security';
import { NbLayoutScrollService, NbStepperComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.scss']
})
export class SurveyEditorComponent implements OnInit {

  public sections: Array<Section> = new Array<Section>();
  public forms: Array<FormGroup> = new Array<FormGroup>();
  public loading: boolean =  false;
  start = false;
  consent;
  public addingOption: boolean =  false;
   constructor(
    private _surveyService: SurveyService,
    private _fb: FormBuilder,
    public _accessChecker: NbAccessChecker,
    private _ly: NbLayoutScrollService

  ) {


    this._surveyService.getAllSections().subscribe({
      next: (sections) => {
       this.sections = sections;
       sections.map((section) => {
        const form = _fb.group({});
         section.questions.map(question => {

          form.addControl( question.id+"", new FormControl(question.text, Validators.required));
          question.options.map((option) => {
            if(option.text==="Otro"|| option.text==="Otra"){
              form.addControl( question.id+"_OTRO", new FormControl('', Validators.required));
            }
          })
        });
        this.forms.push(form);


       });
       console.log(this.forms);


       },
    })
  }

  addOption(q: Question){
    const opt: Option = {question_id: q.id,text: q.newOpt}  ;

    this._surveyService.addOption(opt).subscribe({
      next: (opt) => {
        if(opt){
          q.options.push(opt);
          q.newOpt = "";
          q.addingOption = false;
        }

      },
    })
  }

  updateQuestion(q: Question,index){

    q.text = this.forms[index].get(q.id+"").value
    this._surveyService.updateQuestion(q).subscribe({
      next: (q) => {
        if(q){
          this._surveyService.showToast("right","success","Actualizado Correctamente");
        }

      },
    })
  }

  removeOption(opt: Option, question, index){
    this._surveyService.deleteOption(opt).subscribe({
      next: (opt) => {
          if(opt){
            this._surveyService.showToast("right","success","Eliminado Correctamente")
            question.options.splice(index,1);
          }
       },
    })


  }

  toggleAddOption(question){
    question.addingOption = !question.addingOption;
  }

  onChangeEvent($e, q){
    q.newOpt = $e.target.value
  }

  ngOnInit(): void {
   //
  }
  @ViewChild('stepper') stepper: NbStepperComponent;

  scrollToTop(){
    this._ly.scrollTo(0,0);


  }

  trackByFn(index, item) {
    return `${index}-${item?.trackId}`;
  }

}
