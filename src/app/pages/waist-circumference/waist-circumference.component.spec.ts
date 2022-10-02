import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaistCircumferenceComponent } from './waist-circumference.component';

describe('WaistCircumferenceComponent', () => {
  let component: WaistCircumferenceComponent;
  let fixture: ComponentFixture<WaistCircumferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaistCircumferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaistCircumferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
