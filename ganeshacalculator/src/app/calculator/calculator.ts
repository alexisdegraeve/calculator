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
  myDisplay = signal('0');

  handlePress(val: string | number) {
  const valueAsString = val.toString(); 

  if (valueAsString === 'C') return this.resetDisplay();

  if (valueAsString === '=') {
    this.calculate();
  } else {
    this.myDisplay.update(current => 
      current === '0' ? valueAsString : current + valueAsString
    );
  }
  }

  setMyDisplay() {
    this.myDisplay.set('2');
  }
  resetDisplay() {
    this.myDisplay.set('0');
  }

  private calculate() {
    console.log('Calculate :', this.myDisplay());
  }
}
