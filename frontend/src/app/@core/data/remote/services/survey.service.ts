import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Commons } from '@core/utils/commons';
import { NbToastrService } from '@nebular/theme';
import { format } from 'date-fns';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Occupation } from '../schemas/occupation';
import { Option } from '../schemas/option';
import { Population } from '../schemas/population';
import { PpsRank } from '../schemas/pps_rank';
import { Question } from '../schemas/question';
import { Section } from '../schemas/section';
import { Survey } from '../schemas/survey';
import { Surveyed } from '../schemas/surveyed';
import { User } from '../schemas/users';
const routes = {
  questions: 'questions',
  question: (id: number) => `questions/${id}`,
  options: 'options',
  option: (id: number) => `options/${id}`,
  sections: 'sections',
  section: (session: string,uuid: string ) => `sections/${session}/${uuid}`,
  surveys: 'surveys',
  survey: (id: string) =>  `surveys/${id}`,
  survey_uuid: (id: string) => `surveys/uuid/${id}`,
  surveyeds: "surveyeds",
  surveyed: (id: string) =>  `surveyeds/${id}`,

  populations:"populations",
  population: (id: string) => `populations/${id}`,
  population_activate: (id: string) => `populations/activate/${id}`,

  user_surveys:  (id: string) => `surveys/${id}`,
  gateway: 'surveys/gateway',
  user: (id: number) => `users/${id}`,

  pps_uuid: (uuid: string) =>  `pps/${uuid}`,
  occupations: (pps_code: string,onet_title: string, ) =>  `occupations/${pps_code}/${onet_title}`,
  occupation:(title: string) =>  `occupation/${title}`,
};
@Injectable({
  providedIn: 'root'
})
export class SurveyService extends  Commons {







  constructor(
    private _http: ApiService,
    private _nbService: NbToastrService,
    ) {
    super(_nbService);
    }

  getAllSections(): Observable<Section[]> {
    return  this._http.get<Section[]>(routes.sections).pipe(
      tap(_ => this.log('Fetched Sections')),
      catchError(this.handleError<Section[]>('getAll', [])),
      map(sections => sections.map(section => new Section().deserialize(section))),
    );
  }

  getSingleSection(uuid: string, section: string): Observable<Section> {
    return this._http.get<Section>(routes.section(section,uuid)).pipe(
      map(section => new Section().deserialize(section)) );
    }

  getAllQuestions(): Observable<Question[]> {
    return  this._http.get<Question[]>(routes.questions).pipe(
     tap(_ => this.log('Fetched Questions')),
     catchError(this.handleError<Question[]>('getAll', [])),
     map(questions => questions.map(question => new Question().deserialize(question))),
   );
  }

  /** PUT: Update a Questi??n */
  updateQuestion(q: Question): Observable<Question> {
    return this._http.put<Question>(routes.question(q.id), q).pipe(
      tap(_ => this.log(`Updated role id=${q.id}`)),
      catchError(this.handleError<Question>('updateQuestion')),
    );
  }

  /** POST: Update a Questi??n */
  addOption(  q: Option) {
    return this._http.post<Option>(routes.options, q).pipe(
      tap(_ => this.log(`Add Option id=${q.id}`)),
      catchError(this.handleError<Question>('addOption')),
    );
  }

  deleteOption(q: Option) {
    return this._http.delete<Option>(routes.option(q.id)).pipe(
      tap(_ => this.log(`Deleted Option id=${q.id}`)),
      catchError(this.handleError<Question>('deleteOption')),
    );
  }
  /** POST: Update or add a Survey */

  addOrUpdateSurvey(survey: FormData) {
    return this._http.postFormData<Survey>(routes.surveys, survey, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      tap(_ => this.log(`create Survey `)),
      catchError(this.handleError<Survey>('Survey')),
    );
  }

  createOrGetSurvey(survey: FormData) {
    return this._http.postFormData<Survey>(routes.gateway, survey, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      tap(_ => this.log(`create Survey `)),
      catchError(this.handleError<Survey>('Survey')),
    );
  }



    getSingleUser(id: number): Observable<User> {
    return this._http.get<User>(routes.user(id)).pipe(
      catchError(this.handleError<User[]>('getSingle', [])),
      map(user => new User().deserialize(user)),
      );
    }


    getSurveys(id: string): Observable<Survey> {
      return  this._http.get<Survey[]>(routes.user_surveys(id)).pipe(
      tap(_ => this.log('Fetched Surveys')),
      catchError(this.handleError<Question[]>('getAll', [])),
      map(surveys => surveys.map(survey => new Survey().deserialize(survey))),
    );
    }


    getSurvey(uuid: string) {
      return  this._http.get<Survey[]>(routes.survey_uuid(uuid)).pipe(
        tap(_ => this.log('Fetched Surveys')),
        catchError(this.handleError<Survey[]>('getAll', [])),
        map(survey => new Survey().deserialize(survey)) ,
      );
    }

    getPpsRank(uuid: string) : Observable<PpsRank[]> {
      return  this._http.get<PpsRank[]>(routes.pps_uuid(uuid)).pipe(
        tap(_ => this.log('Fetched Pps')),
        catchError(this.handleError<PpsRank[]>('getAll', [])),
        map(ppsRanking => ppsRanking.map(ppsRank => new PpsRank().deserialize(ppsRank))) ,
      );
    }

    getOccupationByTitle(title: string) {
      return  this._http.get<PpsRank[]>(routes.occupation(title)).pipe(
        tap(_ => this.log('Fetched getOccupations')),
        catchError(this.handleError<Occupation[]>('getAll', [])),
        map(occupation => new Occupation().deserialize(occupation)) ,
      );    }


    getOccupationsBylevel(pps_code: string,onet_title: string){
      return  this._http.get<PpsRank[]>(routes.occupations(pps_code,onet_title)).pipe(
        tap(_ => this.log('Fetched getOccupations')),
        catchError(this.handleError<Occupation[]>('getAll', [])),
        map(ocupattions => ocupattions.map(occupation => new Occupation().deserialize(occupation))) ,
      );
    }


    getPopulations(): Observable<Population[]> {
      return  this._http.get<Population[]>(routes.populations).pipe(
       tap(_ => this.log('Fetched Population')),
       catchError(this.handleError<Population[]>('Population', [])),
       map(populations => populations.map(population => new Population().deserialize(population))),
     );
    }
    addPopulation(formData: FormData) {
      return this._http.postFormData<Survey>(routes.populations, formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe(
        tap(_ => this.log(`create Population `)),
        catchError(this.handleError<Population>('Population')),
      );
    }
    getPopulation(pop_id: any) {
      return  this._http.get<Population[]>(routes.population(pop_id)).pipe(
        tap(_ => this.log('Fetched Population')),
        catchError(this.handleError<Population[]>('getAll', [])),
        map(population => new Population().deserialize(population)) ,
      );
    }

    delPopulations(pop: Population) {
      const url = routes.population(pop.id+"");

      return this._http.delete<Population>(url).pipe(
        tap(_ => this.log(`deleted Population id=${pop.id}`)),
        catchError(this.handleError<Population>('deletePopulation')),
      );
    }

    activePopulations(pop: Population): Observable<Population[]>{
      const url = routes.population_activate(pop.id+"");

      return this._http.post<Population>(url).pipe(
        tap(_ => this.log('Fetched Population')),
        catchError(this.handleError<Question[]>('Population', [])),
        map(populations => populations.map(population => new Population().deserialize(population))),
        );
      }


      addSurveyed(  surveyed: Surveyed) {
        return this._http.post<Surveyed>(routes.surveyeds, surveyed).pipe(
          tap(_ => this.log(`Add Surveyed id=${surveyed.id}`)),
          catchError(this.handleError<Surveyed>('addSurveyedn')),
          map(surveyed => new Surveyed().deserialize(surveyed)) ,

        );
      }

    deleteSurveyed(surveyed: Surveyed) {
    const url = routes.surveyed(surveyed.id+"");

    return this._http.delete<Surveyed>(url).pipe(
      tap(_ => this.log(`deleted Surveyed id=${surveyed.id}`)),
      catchError(this.handleError<Surveyed>('deletePopulation')),
    );
    }

    deleteSurvey(survey: Surveyed) {
      const url = routes.survey(survey.id+"");

      return this._http.delete<Survey>(url).pipe(
        tap(_ => this.log(`deleted Survey id=${survey.id}`)),
        catchError(this.handleError<Population>('deletePopulation')),
      );
    }

//HELPERS
      setTableData(tableRoute: string, data:any) {
        return this._http.postFormData<Survey>(tableRoute, data, {
          reportProgress: true,
          observe: 'events'
        }).pipe(
          tap(_ => this.log(`create Survey `)),

        );
      }


      getTableDataPost(tableRoute: string, filters: any) { // is the table name
        return  this._http.post<any[]>(tableRoute, filters).pipe(
          tap(_ => this.log('Fetched tableRoute')),
          catchError(this.handleError<any[]>('tableRoute', [])),
        //  map(tableRows => tableRows.map(tableRow => new Population().deserialize(population))),
        );
      }
      getTableData(tableRoute: string, filters?:any) { // is the table name


        return  this._http.get<any[]>(tableRoute).pipe(
          tap(_ => this.log('Fetched tableRoute')),
          catchError(this.handleError<any[]>('tableRoute', [])),
        //  map(tableRows => tableRows.map(tableRow => new Population().deserialize(population))),
        );
      }
      getTableDataParams(tableRoute: string, filters?:any, range?:any) { // is the table name
        let params =   new HttpParams()
        if(filters){
          for (let key in filters) {
            let value = filters[key].value;
            if(value !== "*"){
              params =  params.append(key, value)
            }
           }
        }
        if(range){
          for (let key in range) {
            let value = range[key];
            if(value !== "*"){

              params =  params.append(key,    format(value, "yyyy-MM-dd"))
            }
           }

        }
        console.log(params.toString());

        return  this._http.get<any[]>(tableRoute, {params}).pipe(
          tap(_ => this.log('Fetched tableRoute')),
          catchError(this.handleError<any[]>('tableRoute', [])),
        //  map(tableRows => tableRows.map(tableRow => new Population().deserialize(population))),
        );
      }

      sendOccupationMail(title: string) {
        return this._http.post<Option>("occupations/mail",{"occupation_title":title}).pipe(
          tap(_ => this.log(`Send Mail`)),
          catchError(this.handleError<Question>('Sen Mail')),
        );
      }


eval_conditions(section, form: FormGroup, value, questions) {

  section.questions.map((question: Question) => {

    if( question.conditions.length>0){
      let result = true;
      question.conditions.forEach((condition) => {
        let values = condition.value.split(",");
        if (values.includes(value + "")) {
          //set visibility to conditioned question
          form.get(condition.question.label).setValidators(null);
          form.get(condition.question.label).updateValueAndValidity();

          //FIX question estructure.
          if(questions.questions){
            questions.questions[condition.question_index].show = false;
          }else{
            questions[condition.question_index].show = false;

          }

        } else {
          form.get(condition.question.label).setValidators(Validators.required);
          form.get(condition.question.label).updateValueAndValidity();
          form.get(condition.question.label).enable();
           //FIX question estructure.
            if(questions.questions){
              questions.questions[condition.question_index].show = true;
            }else{
              questions[condition.question_index].show = true;

            }
        }
      });
    }

  });

}


}
