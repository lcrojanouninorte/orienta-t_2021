import { HttpEventType } from "@angular/common/http";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from "@angular/router";
import { Question } from "@core/data/remote/schemas/question";
import { Section } from "@core/data/remote/schemas/section";
import { Survey } from "@core/data/remote/schemas/survey";
import { User } from "@core/data/remote/schemas/users";
import { SurveyService } from "@core/data/remote/services/survey.service";
import { NbAccessChecker } from "@nebular/security";
import { NbDateService, NbLayoutScrollService, NbStepperComponent } from "@nebular/theme";
import { format, formatDuration, intervalToDuration, parse, parseISO, toDate,  } from 'date-fns'

@Component({
  selector: "ngx-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit{
  public sections: Array<Section> = new Array<Section>();
  public section: Section;
  public forms: Array<FormGroup> = new Array<FormGroup>();
  public form: FormGroup;

  public loading: boolean = false;
  public pollster_id: any;
  start = false;
  consent;
  pollster: User;
  survey_id: any;
  uuid: string;
  section_id: string;
  survey: Survey;
  population_id: any;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _surveyService: SurveyService,
    private _fb: FormBuilder,
    public _accessChecker: NbAccessChecker,
    private _ly: NbLayoutScrollService,
    private _router: Router,
    protected dateService: NbDateService<Date>
  ) {
    _router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationEnd) {
        this.updateSession();
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
    this.form = this._fb.group({});


    this.pollster_id = this._Activatedroute.snapshot.paramMap.get(
      "pollster_id"
    );
    this.population_id = this._Activatedroute.snapshot.paramMap.get(
      "population_id"
    );

    this.uuid = this._Activatedroute.snapshot.paramMap.get("uuid");
    this.section_id = this._Activatedroute.snapshot.paramMap.get("section_id");
    this.getSession(this.uuid, this.section_id);
    //Get pollster Name:

    if (this.section_id == "1") {
      this.getSurvey(this.uuid);
    }

    this._surveyService.getSingleUser(this.pollster_id).subscribe({
      next: (user) => {
        this.pollster = user;
      },
    });
  }

  getSession(uuid, section_id) {
    this.loading = true;
    this._surveyService.getSingleSection(uuid, section_id).subscribe({
      next: (section: Section) => {
        this.section = section;

        this.form = this._fb.group({});
        this.section.questions.map((question: Question) => {
          //Set Validators:


          switch (question.type) {
            case "M":
              question.options.map((option, i) => {
                this.form.addControl(
                  question.label + "_" + option.value,
                  new FormControl(question.answer[question.label+"_"+option.subcode], [])
                );
                if (option.text === "Otro" || option.text === "Otra") {
                  this.form.addControl(
                    question.label + "_OTRO",
                    new FormControl( question.answer[question.label + "_OTRO"]+ " ", [])
                  );
                }
              });

              break;
            case "U":
              this.form.addControl(
                question.label,
                new FormControl(
                  question.answer[question.label]+"",
                  question.validators
                )
              );

              question.options.map((option) => {
                if (option.text === "Otro" || option.text === "Otra") {
                  this.form.addControl(
                    question.label + "_OTRO",
                    new FormControl( question.answer[question.label + "_OTRO"]+ " ", [])
                  );
                }

              });


              break;
            case "D":
              let date;
              if(  question.answer[question.label] !== ""){
                  date = new Date(question.answer[question.label]);

               }else{
                 date = this.dateService.today;

              }
              this.form.addControl(
                question.label,
                new FormControl(
                  date,
                  question.validators
                )
              );

              break;
            case "INS":
              break;
            default:
              this.form.addControl(
                question.label,
                new FormControl(
                  question.answer[question.label],
                  question.validators
                )
              );

              break;
          }
        });
        this.loading = false;


        this.scrollToTop();
        // this.stepper.next();
        // this.forms.push(this.form);

        //TODO: fill default values

        if(section_id=="6"){
          let time = intervalToDuration({
            start: new Date(this.section.survey.created_at),
             end: this.dateService.today()
          })
          if( this.form.get("F_10")){
            this.form.get("F_10").disable();
            if(this.form.get("F_10").value! == ""){
              this.form.get("F_10")?.setValue(
                formatDuration( time )
                 )
            }
          }


        }

        //update conditions
       this.section.questions.map((question: Question) => {

        if( question.conditions.length>0){

            this.eval_conditions(this.form, question, question.answer[question.label], this.section) ;

        }

    });
      },
    });
  }

  eval_conditions(form: FormGroup, question: Question, value, questions) {
    let result = true;

    question.conditions.forEach((condition) => {
      let values = condition.value.split(",");
      if (values.includes(value + "")) {
        //set visibiliti to conditioned question
        form.get(condition.question.label).setValidators(null);
        form.get(condition.question.label).updateValueAndValidity();
        form.get(condition.question.label).disable();
        questions[condition.question_index].show = false;
      } else {
        form.get(condition.question.label).setValidators(Validators.required);
        form.get(condition.question.label).updateValueAndValidity();
        form.get(condition.question.label).enable();
        questions[condition.question_index].show = true;
      }
    });
  }

  onSubmit(form: FormGroup, i) {
    if (form.valid) {
      //submit session
      const formData = this._surveyService.toFormData(form.value);
      formData.append("pollster_id", this.pollster_id);
      formData.append("population_id", this.population_id);
      formData.append("section_id", this.section_id);
      formData.append("uuid", this.uuid);

      this.loading = true;
      this._surveyService.addOrUpdateSurvey(formData).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            this._surveyService.showToast(
              "top rigth",
              "success",
              "Sección Actualizada correctamente"
            );
            this.loading = false;
            this.survey_id = event.body.id;

            if (i == "6") {
              this._router.navigate(["encuesta/gracias"]);
            } else {
              this._router.navigate([
                "encuesta",
                parseInt(this.section_id) + 1,
                this.pollster_id,
                this.uuid,
              ]);
            }
          }
        },
        error: (error) => {
          this._surveyService.showToast("top rigth", "danger", error);
          this.loading = false;
        },
      });

      //  this.stepper.next();
    } else {
      this.validateAllFormFields(form); //{7}
      this._surveyService.showToast(
        "left",
        "warning",
        "Favor revisar preguntas sin responder."
      );
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    //{1}
    Object.keys(formGroup.controls).forEach((field) => {
      //{2}
      const control = formGroup.get(field); //{3}
      if (control instanceof FormControl) {
        //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        //{5}
        this.validateAllFormFields(control); //{6}
      }
    });
  }

  @ViewChild("stepper") stepper: NbStepperComponent;

  scrollToTop() {
    this._ly.scrollTo(0, 0);

    //
  }

  ngOnInit() {

  }
  getSurvey(uuid) {
    this.loading = true;
    this._surveyService.getSurvey(uuid).subscribe({
      next: (survey: Survey) => {
        this.survey = survey;
        this.loading = false;
      },
    });
  }
  updateSession() {
    this.pollster_id = this._Activatedroute.snapshot.paramMap.get(
      "pollster_id"
    );
    this.population_id = this._Activatedroute.snapshot.paramMap.get(
      "population_id"
    );

    this.uuid = this._Activatedroute.snapshot.paramMap.get("uuid");
    this.section_id = this._Activatedroute.snapshot.paramMap.get("section_id");
    this.getSession(this.uuid, this.section_id);


  }

  trackByFn(index, item) {
    return `${index}-${item?.trackId}`;
  }
}
