import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat',
  standalone: true,
})
export class ConcatenationPipe implements PipeTransform {
  transform(value: string, index: number): string {
    return `${value} - ${index}`;
  }
}
