import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Question } from "@core/data/remote/schemas/question";

@Component({
  selector: "ngx-scale-card",
  templateUrl: "./scale-card.component.html",
  styleUrls: ["./scale-card.component.scss"],
})
export class ScaleCardComponent implements OnInit {
  @Input() question: Question;
  @Input() form: FormGroup;
  @Output() isDone = new EventEmitter<boolean>();
  @Output() onChange = new EventEmitter<boolean>();

  done: number = 0;
  constructor() {}

  ngOnInit(): void {}

  setOptionValue(option, $event) {
    //Update Parent formcontrol.
    if (this.form?.controls) {
      this.form.controls[this.question.label + "_" + option.subcode].setValue(
        $event
      );
      this.question.answer[this.question.label + "_" + option.subcode] = $event;

      this.checkIfQuestionIsdone();
      if (this.done == 4) {
        if (this.question.answers.length == 0) {
          //This check first time user do the test, after that
          //the question will have and answer

          this.question.checked = true;
          this.question.answers[0] = {
            checked: true,
            survey_id: "",
            value: "",
          };
          this.isDone.emit(true);
          this.onChange.emit(true);

        } else {
          //Verificar en caso de que ya existe una respuesta para la pregunta
          if(this.question.answers[0].checked  !="1" ||  this.question.answers[0].checked != true){
            this.isDone.emit(true);

          }
          this.question.checked = true;
          this.question.answers[0].checked = true;
          this.onChange.emit(true);

        }

      }
    }
  }

  checkIfQuestionIsdone() {
    this.done = 0;

    this.question.options.map((option) => {
      if (
        !["null", "", null].includes(
          this.form.controls[this.question.label + "_" + option.subcode].value
        )
      ) {
        this.done++;
      }
    });
  }
}
