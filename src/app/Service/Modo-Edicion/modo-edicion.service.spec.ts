import { TestBed } from '@angular/core/testing';

import { ModoEdicionService } from './modo-edicion.service';

describe('ModoEdicionService', () => {
  let service: ModoEdicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModoEdicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
