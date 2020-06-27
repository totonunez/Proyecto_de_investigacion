import { TestBed } from '@angular/core/testing';

import { GruposmiembrosService } from './gruposmiembros.service';

describe('GruposmiembrosService', () => {
  let service: GruposmiembrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruposmiembrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
