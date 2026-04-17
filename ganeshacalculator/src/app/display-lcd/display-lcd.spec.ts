import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLcd } from './display-lcd';

describe('DisplayLcd', () => {
  let component: DisplayLcd;
  let fixture: ComponentFixture<DisplayLcd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayLcd],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayLcd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
