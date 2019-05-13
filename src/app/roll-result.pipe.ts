import { Pipe, PipeTransform } from '@angular/core';
import { Roll, RollType } from './roll.model';

@Pipe({
  name: 'rollResult'
})
export class RollResultPipe implements PipeTransform {
  transform(value: Roll): string {
    if (value) {
      switch (value.type) {
        case RollType.STRIKE:
          return 'X';
        case RollType.SPARE:
          return '/';
        default:
          return '' + value.pins;
      }
    }
    return '';
  }
}
