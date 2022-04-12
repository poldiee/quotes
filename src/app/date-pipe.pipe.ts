import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  // transform(value: any, ...args: any []): any {
    // transform(value, Date); number {
      transform(value: any): number {
        let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(todayWithNoTime - value)
    const secondsInADay= 86400;

    var dateDifferenceSeconds=dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 1 && todayWithNoTime > value){
        return dateCounter;
    }else{
        return 0;
    }

      

  }
}
