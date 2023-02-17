import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefineComponent } from './refine.component';

describe('RefineComponent', () => {
  let component: RefineComponent;
  let fixture: ComponentFixture<RefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
