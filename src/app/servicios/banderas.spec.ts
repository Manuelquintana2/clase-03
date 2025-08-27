import { TestBed } from '@angular/core/testing';

import { Banderas } from './banderas';

describe('Banderas', () => {
  let service: Banderas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Banderas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
