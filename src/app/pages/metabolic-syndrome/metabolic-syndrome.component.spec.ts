import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetabolicSyndromeComponent } from './metabolic-syndrome.component';

describe('MetabolicSyndromeComponent', () => {
  let component: MetabolicSyndromeComponent;
  let fixture: ComponentFixture<MetabolicSyndromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetabolicSyndromeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetabolicSyndromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
