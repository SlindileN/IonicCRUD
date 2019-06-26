import { TestBed } from '@angular/core/testing';

import { CrudService } from './service/crud.service';

describe('CrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service).toBeTruthy();
  });
});
