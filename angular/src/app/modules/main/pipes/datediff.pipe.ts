import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datediff'})

export class DateDiffPipe{
 
  transform(enddate: string, startdate: string): string {
    return moment.utc(moment(startdate).diff(moment(enddate))).format("HH:mm:ss");
  }
}