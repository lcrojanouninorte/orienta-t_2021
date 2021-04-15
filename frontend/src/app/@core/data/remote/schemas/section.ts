import { Condition } from "./condition";
import { Question } from "./question";
import { Survey } from "./survey";

export class Section {
  id: number;
  code: string;
  text: string;
  desc?: string[];
  type: string;
  required: boolean;
  visible: boolean;
  questions: Question[];
survey?: Survey;
  deserialize?(input: any): this {
    Object.assign(this, input);
    let conditions: Array<Condition> = new Array<Condition>();
    this.questions ? input.questions.map(question =>{new Question().deserialize(question)} ) : [];
    //Get array of conditions
    this.questions.map((question) => {
      question.conditions.map((condition)=>{
        conditions.push(condition);
      })
    });
    //Get index of question in array
    conditions.map(condition=>{
      this.questions.map((question,index)=>{
        if(condition.restriction_id == question.id){
          condition.question_index = index;
        }
      })
    })


    return this;
  }
  constructor(){
  }
}
