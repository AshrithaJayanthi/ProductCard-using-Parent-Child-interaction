import { TestBed } from '@angular/core/testing';

import { DataTwoService } from './data-two.service';

describe('DataTwoService', () => {
  let service: DataTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
