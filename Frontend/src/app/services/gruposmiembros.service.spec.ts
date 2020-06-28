import { TestBed } from '@angular/core/testing';

import { GruposMiembrosService } from './gruposmiembros.service';

describe('GruposMiembrosService', () => {
  let service: GruposMiembrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruposMiembrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
