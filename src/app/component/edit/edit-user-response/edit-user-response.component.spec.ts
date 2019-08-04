import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserResponseComponent } from './edit-user-response.component';

describe('EditUserResponseComponent', () => {
  let component: EditUserResponseComponent;
  let fixture: ComponentFixture<EditUserResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
