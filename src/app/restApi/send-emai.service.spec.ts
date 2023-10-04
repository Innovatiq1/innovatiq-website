import { TestBed } from '@angular/core/testing';

import { SendEmaiService } from './send-emai.service';

describe('SendEmaiService', () => {
  let service: SendEmaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEmaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
