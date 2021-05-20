import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestuserstwoComponent } from './testuserstwo.component';

describe('TestuserstwoComponent', () => {
  let component: TestuserstwoComponent;
  let fixture: ComponentFixture<TestuserstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestuserstwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestuserstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
