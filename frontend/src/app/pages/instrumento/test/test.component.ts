import { HttpEventType } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
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
import { InstitutionMockService } from "@core/mock/institution.service";
import { NbAccessChecker } from "@nebular/security";
import { NbDateService, NbLayoutScrollService } from "@nebular/theme";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "ngx-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  public sections: Array<Section> = new Array<Section>();
  public section: Section;
  public forms: Array<FormGroup> = new Array<FormGroup>();
  public form: FormGroup;

  public loading: boolean = false;
  public pollster_id: any;
  start = true;
  consent;
  pollster: User;
  survey_id: any;
  uuid: string;
  section_id: string;
  survey: Survey;
  population_id: any;
  total_questions = 0;
  total_questions_answered = 0;
  progress = 0;
  dptos: any;
  institutions: Observable<any>;
  muns: Observable<any>;
  selectedDpto: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _surveyService: SurveyService,
    private _fb: FormBuilder,
    public _accessChecker: NbAccessChecker,
    private _ly: NbLayoutScrollService,
    private _router: Router,
    protected dateService: NbDateService<Date>,
    private _institutionService: InstitutionMockService
  ) {
    _router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationEnd) {
        this.updateSession();
      }
    });
    this.dptos = this._institutionService.getDptos();
    //1. Load a survey by sessions and asnwers for given uuid
    this.form = this._fb.group({});
    this.uuid = this._Activatedroute.snapshot.paramMap.get("uuid");
    this.section_id = this._Activatedroute.snapshot.paramMap.get("section_id");
    this.getSession(this.uuid, this.section_id);
    if (this.section_id == "1") {
      //2. Get Answers of the uuid
      this.getSurvey(this.uuid);
    }else{


    }
  }



  getSession(uuid, section_id) {
    this.loading = true;

    this._surveyService.getSingleSection(uuid, section_id).subscribe({
      next: (section: Section) => {
        this.total_questions = 0;
        this.total_questions_answered = 0;
        this.section = section;
        this.form = this._fb.group({});
        this.section.questions.map((question: Question) => {
          this.total_questions++;
          if (question.answers[0]?.checked) {
            this.total_questions_answered++;
          }
          //Set Validators:
          switch (question.type) {
            case "SC":
            case "M":
              question.options.map((option, i) => {
                this.form.addControl(
                  question.label + "_" + option.subcode,
                  new FormControl(
                    question.answer[question.label + "_" + option.subcode],
                    []
                  )
                );
              });

              break;
            case "U":
              this.form.addControl(
                question.label,
                new FormControl(
                  question.answer[question.label] + "",
                  question.validators
                )
              );

              question.options.map((option) => {
                if (option.text === "Otro" || option.text === "Otra") {
                  this.form.addControl(
                    question.label + "_OTRO",
                    new FormControl(
                      question.answer[question.label + "_OTRO"] + " ",
                      []
                    )
                  );
                }
              });

              break;
            case "D":
              let date;
              if (question.answer[question.label] !== "") {
                date = new Date(question.answer[question.label]);
              } else {
                date = new Date();
              }
              this.form.addControl(
                question.label,
                new FormControl(date, question.validators)
              );

              break;
            case "INS":
              break;
            case "DPTO":
              this.form.addControl(
                question.label,
                new FormControl(
                  question.answer[question.label],
                  question.validators
                )
              );


              this.getMuns(question.answer[question.label]);

              break;
              case "MUNI":
                this.form.addControl(
                  question.label,
                  new FormControl(
                    question.answer[question.label],
                    question.validators
                  )
                );


                this.getInstitutions(question.answer[question.label]);

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
        this.updateProgress(this.total_questions_answered, true);

        this.scrollToTop();

      },
    });
  }

  eval_conditions() {}

  onSubmit(form: FormGroup, i) {
    if (form.valid) {
      //submit session
      const formData = this._surveyService.toFormData(form.value);
      formData.append("section_id", this.section_id);
      formData.append("uuid", this.uuid);

      this.loading = true;
      this._surveyService.addOrUpdateSurvey(formData).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            /* this._surveyService.showToast(
               "top rigth",
               "info",
               "Informaci??n guardada correctamente"
             );*/
            this.loading = false;
            this.survey_id = event.body.id;

            if (i == 2) {
              this._router.navigate(["/perfil/areas/", this.uuid]);
            } else {
              this._router.navigate([
                "encuesta",
                parseInt(this.section_id) + 1,
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

  onSubmitUpdate(form: FormGroup) {
    //submit session
    const formData = this._surveyService.toFormData(form.value);
    formData.append("section_id", this.section_id);
    formData.append("uuid", this.uuid);

    this.loading = true;
    this._surveyService.addOrUpdateSurvey(formData).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          /*this._surveyService.showToast(
            "top rigth",
            "info",
            "Pregunta guardada correctamente"
          );*/
          this.loading = false;
          this.survey_id = event.body.id;
        }
      },
      error: (error) => {
        this._surveyService.showToast("top rigth", "danger", error);
        this.loading = false;
      },
    });

    //  this.stepper.next();
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
    this.uuid = this._Activatedroute.snapshot.paramMap.get("uuid");
    this.section_id = this._Activatedroute.snapshot.paramMap.get("section_id");
    this.getSession(this.uuid, this.section_id);
  }

  updateProgress(total_questions_answered, $event) {
    if ($event) {
      if (this.total_questions > 0) {
        this.total_questions_answered = total_questions_answered;
        this.progress = Math.ceil(
          (this.total_questions_answered / this.total_questions) * 100
        );
      } else {
        this.progress = 0;
      }
    }
  }

  //HELPERS
  trackByFn(index, item) {
    return `${index}-${item?.trackId}`;
  }

  scrollToTop() {
    this._ly.scrollTo(0, 0);

    //
  }
  //Autocomplete
  options:   any[] ;
  filteredOptions$: Observable<any[]>;

  @ViewChild('autoInput') input;
  ngOnInit() {

    this.filteredOptions$ = of(this.options);
  }
  private filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((optionValue:any) =>    optionValue.Nombre.toLowerCase().includes(filterValue ))
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
  }

  //Get municipios
  getMuns(selectedDpto){

   this.muns =  this._institutionService.getMuns(selectedDpto)
  }


  //Get municipios
  getInstitutions(selectedMun){
      this.institutions =  this._institutionService.getInstitutions(selectedMun  )
      this._institutionService.getInstitutions(selectedMun  ).subscribe((insti)=>
       { this.options =  insti }
      );

   }

}
