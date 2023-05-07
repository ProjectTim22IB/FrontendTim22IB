import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthdrawalComponent } from './widthdrawal.component';

describe('WidthdrawalComponent', () => {
  let component: WidthdrawalComponent;
  let fixture: ComponentFixture<WidthdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidthdrawalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidthdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
