import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDeclineRequestsComponent } from './accept-decline-requests.component';

describe('AcceptDeclineRequestsComponent', () => {
  let component: AcceptDeclineRequestsComponent;
  let fixture: ComponentFixture<AcceptDeclineRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptDeclineRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptDeclineRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
