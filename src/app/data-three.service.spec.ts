import { TestBed } from '@angular/core/testing';

import { DataThreeService } from './data-three.service';

describe('DataThreeService', () => {
  let service: DataThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
