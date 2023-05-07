import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckIfValidComponent } from './check-if-valid.component';

describe('CheckIfValidComponent', () => {
  let component: CheckIfValidComponent;
  let fixture: ComponentFixture<CheckIfValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckIfValidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckIfValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
