import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ConcatenationPipe } from '../pipes/concatenation.pipe';

@Component({
  standalone: true,
  imports: [NgFor, ConcatenationPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | concat: index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'kjdc', 'hello'];
}
