import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestusersComponent } from './testusers.component';

describe('TestusersComponent', () => {
  let component: TestusersComponent;
  let fixture: ComponentFixture<TestusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
