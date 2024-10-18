import { TestBed } from '@angular/core/testing';

import { ApisInicioService } from './apis-inicio.service';

describe('ApisInicioService', () => {
  let service: ApisInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
