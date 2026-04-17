import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  boutons = [
    7, 8, 9,
    4, 5, 6,
    1, 2, 3,
    0, '.', '='
  ];
}
