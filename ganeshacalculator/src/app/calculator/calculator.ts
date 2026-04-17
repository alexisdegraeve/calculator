import { Component, signal } from '@angular/core';
import { DisplayLcd } from '../display-lcd/display-lcd';

@Component({
  selector: 'app-calculator',
  imports: [DisplayLcd],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  boutons = [
    7, 8, 9,'÷',
    4, 5, 6,'x',
    1, 2, 3,'-',
    0, '.', '=','+'
  ];
  myDisplay = signal('1111111111111111111111111111111');
  setMyDisplay() {
    this.myDisplay.set('2');
  }
  resetDisplay() {
    this.myDisplay.set('0');
  }
}
