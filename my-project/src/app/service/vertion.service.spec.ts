import { TestBed, inject } from '@angular/core/testing';

import { VertionService } from './vertion.service';

describe('VertionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VertionService]
    });
  });

  it('should be created', inject([VertionService], (service: VertionService) => {
    expect(service).toBeTruthy();
  }));
});
