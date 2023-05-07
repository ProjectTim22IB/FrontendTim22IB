import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequsetComponent } from './new-requset.component';

describe('NewRequsetComponent', () => {
  let component: NewRequsetComponent;
  let fixture: ComponentFixture<NewRequsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRequsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRequsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
