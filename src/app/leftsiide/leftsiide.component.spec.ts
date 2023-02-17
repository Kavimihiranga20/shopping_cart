import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsiideComponent } from './leftsiide.component';

describe('LeftsiideComponent', () => {
  let component: LeftsiideComponent;
  let fixture: ComponentFixture<LeftsiideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftsiideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftsiideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
