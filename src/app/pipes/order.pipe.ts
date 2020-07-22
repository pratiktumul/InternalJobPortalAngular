import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    if (value !== undefined && value !== null && args !== '') {
      if (args === '1') {
        return value.sort((a, b) => {
          if (a.JobTitle.toLowerCase() < b.JobTitle.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      }
      if (args === '2') {
        return value
          .sort((a, b) => {
            if (a.JobTitle.toLowerCase() < b.JobTitle.toLowerCase()) {
              return -1;
            }
            return 0;
          })
          .reverse();
      }
      if (args === '3') {
        return value.sort((a, b) => {
          if (a.TimeDiff < b.TimeDiff) {
            return -1;
          }
          return 0;
        });
      }
    }
    if(args === ''){
      return value.sort((a, b) => {
        if (a.TimeDiff < b.TimeDiff) {
          return -1;
        }
        return 0;
      }).reverse();
    }
    return value;
     
  }
}
