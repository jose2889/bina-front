import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropCero'
})
export class DropCeroPipe implements PipeTransform {

  transform(value: string): number {
    const sinCero = parseFloat(value);
    return sinCero;
  }
}
