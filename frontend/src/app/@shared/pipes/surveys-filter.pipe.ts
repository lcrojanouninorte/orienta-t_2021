import { Pipe, PipeTransform } from '@angular/core';
import { Survey } from '@core/data/remote/schemas/survey';

@Pipe({
  name: 'surveysFilter'
})
export class SurveysFilterPipe implements PipeTransform {

  transform(surveys: Survey[], filter: any): any {
    if (!surveys || !filter) {
        return surveys;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return surveys.filter(survey => survey.surveyed.name.indexOf(filter.name) !== -1);
  }
}
