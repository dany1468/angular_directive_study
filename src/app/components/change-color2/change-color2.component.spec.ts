import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColor2Component } from './change-color2.component';

describe('ChangeColor2Component', () => {
  let component: ChangeColor2Component;
  let fixture: ComponentFixture<ChangeColor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChangeColor2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeColor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
