import { TestBed } from '@angular/core/testing';

import { ConceptsService } from './concepts.service';

describe('ConceptsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConceptsService = TestBed.get(ConceptsService);
    expect(service).toBeTruthy();
  });
});
