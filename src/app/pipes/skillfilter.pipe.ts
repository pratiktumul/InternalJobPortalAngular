import { Pipe, PipeTransform } from '@angular/core';
import { Jobapplication } from '../hrportal/jobapplication';

@Pipe({
  name: 'skillfilter'
})
export class SkillfilterPipe implements PipeTransform {

  transform(value: Jobapplication[], args?: string): Jobapplication[] {
    if (!value || !args) {
      return value;
    }
   
    return value.filter(x => x.Skills.indexOf(args) !== -1);
  }

}
