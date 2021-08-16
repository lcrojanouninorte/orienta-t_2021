import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {

  constructor() { }
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



  }

}
