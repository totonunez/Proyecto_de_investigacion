import { TestBed } from '@angular/core/testing';

import { GestionmiembrosService } from './gestionmiembros.service';

describe('GestionmiembrosService', () => {
  let service: GestionmiembrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionmiembrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
