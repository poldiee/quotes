import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown []): unknown {
    transform(value, Date); number {
      let today:Date = new Date();
    return null;
  }

  }
}
