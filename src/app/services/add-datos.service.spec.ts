import { TestBed } from '@angular/core/testing';

import { AddDatosService } from './add-datos.service';

describe('AddDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDatosService = TestBed.get(AddDatosService);
    expect(service).toBeTruthy();
  });
});
