import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    let originalArray: any[] = value;
    if (value !== undefined && value !== null && args !== '') {
      if (args === '1') {
        return value.sort((a, b) => {
          if (a.CompanyName.toLowerCase() < b.CompanyName.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      }
      if (args === '2') {
        return value
          .sort((a, b) => {
            if (a.CompanyName.toLowerCase() < b.CompanyName.toLowerCase()) {
              return -1;
            }
            return 0;
          })
          .reverse();
      }
      if (args === '3') {
        return value.sort((a, b) => {
          if (a.CreateDate < b.CreateDate) {
            return -1;
          }
          return 0;
        });
      }
    }
    return value.sort((a, b) => {
      if (a.CreateDate < b.CreateDate) {
        return -1;
      }
      return 0;
    }).reverse();
  }
}
