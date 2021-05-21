import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewfragranceComponent } from './addnewfragrance.component';

describe('AddnewfragranceComponent', () => {
  let component: AddnewfragranceComponent;
  let fixture: ComponentFixture<AddnewfragranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewfragranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewfragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
