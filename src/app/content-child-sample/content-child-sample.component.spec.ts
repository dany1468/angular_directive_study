import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildSampleComponent } from './content-child-sample.component';

describe('ContentChildSampleComponent', () => {
  let component: ContentChildSampleComponent;
  let fixture: ComponentFixture<ContentChildSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ContentChildSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
