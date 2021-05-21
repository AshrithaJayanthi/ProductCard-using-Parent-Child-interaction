import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfragranceComponent } from './viewfragrance.component';

describe('ViewfragranceComponent', () => {
  let component: ViewfragranceComponent;
  let fixture: ComponentFixture<ViewfragranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfragranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
