import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    if (!value || !args) {
      return value;
    }
    return value.filter(job => job.Location.toLowerCase().indexOf(args.toLowerCase()) !== -1);
  }
}