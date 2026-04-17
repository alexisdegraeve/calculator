import { Component, input } from '@angular/core';

@Component({
  selector: 'app-display-lcd',
  imports: [],
  templateUrl: './display-lcd.html',
  styleUrl: './display-lcd.scss',
})
export class DisplayLcd {
  display = input('0');
}
