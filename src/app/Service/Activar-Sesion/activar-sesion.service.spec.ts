import { TestBed } from '@angular/core/testing';

import { ActivarSesionService } from '../Activar-Sesion/activar-sesion.service';

describe('ActivarSesionService', () => {
  let service: ActivarSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivarSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
