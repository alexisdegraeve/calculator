import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [Calculator, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ganeshacalculator');
}
