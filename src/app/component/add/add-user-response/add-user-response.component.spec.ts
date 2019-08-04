import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserResponseComponent } from './add-user-response.component';

describe('AddUserResponseComponent', () => {
  let component: AddUserResponseComponent;
  let fixture: ComponentFixture<AddUserResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
