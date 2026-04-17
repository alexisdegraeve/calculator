import { Component, HostListener, signal } from '@angular/core';
import { DisplayLcd } from '../display-lcd/display-lcd';

@Component({
  selector: 'app-calculator',
  imports: [DisplayLcd],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  boutons = [7, 8, 9, '÷', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '=', '+'];
  myDisplay = signal('0');
  storedValue = signal<number | null>(null);
  lastOp = signal<string | null>(null);
  waitingNext = signal(false);

  handlePress(val: string | number) {
    const valueAsString = val.toString();

    if (valueAsString === '=') {
      this.calculate();
    } else if (['+', '-', 'x', '÷'].includes(valueAsString)) {
      this.storedValue.set(parseFloat(this.myDisplay()));
      this.lastOp.set(valueAsString);
      this.waitingNext.set(true);
    } else {
      this.myDisplay.update((current) => {
        if (current === '0' || this.waitingNext()) {
          this.waitingNext.set(false);
          return valueAsString;
        }
        return current + valueAsString;
      });
    }
  }

  resetDisplay() {
    this.myDisplay.set('0');
    this.storedValue.set(null);
    this.lastOp.set(null);
    this.waitingNext.set(false);
  }

  private calculate() {
    const v1 = this.storedValue();
    const v2 = parseFloat(this.myDisplay());
    const op = this.lastOp();

    if (v1 !== null && op) {
      let res = 0;
      if (op === '+') res = v1 + v2;
      if (op === '-') res = v1 - v2;
      if (op === 'x') res = v1 * v2;
      if (op === '÷') res = v1 / v2;

      this.myDisplay.set(res.toString());
      this.storedValue.set(null);
      this.lastOp.set(null);
      this.waitingNext.set(true);
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    if (/[0-9.]/.test(key)) {
      this.handlePress(key);
    } else if (key === '+') {
      this.handlePress('+');
    } else if (key === '-') {
      this.handlePress('-');
    } else if (key === '*') {
      this.handlePress('x');
    } else if (key === '/') {
      event.preventDefault(); 
      this.handlePress('÷');
    } else if (key === 'Enter' || key === '=') {
      this.handlePress('=');
    } else if (key === 'Escape' || key === 'Delete') {
      this.resetDisplay();
    } else if (key === 'Backspace') {
      this.myDisplay.update(v => v.length > 1 ? v.slice(0, -1) : '0');
    }
  }
}
