import { TestBed } from '@angular/core/testing';

import { GrupoListMiembrosService } from './grupolistmiembros.service';

describe('GrupoVerService', () => {
  let service: GrupoListMiembrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoListMiembrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});