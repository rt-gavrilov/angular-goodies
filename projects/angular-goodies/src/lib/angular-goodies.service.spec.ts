import { TestBed, inject } from '@angular/core/testing';

import { AngularGoodiesService } from './angular-goodies.service';

describe('AngularGoodiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularGoodiesService]
    });
  });

  it('should be created', inject([AngularGoodiesService], (service: AngularGoodiesService) => {
    expect(service).toBeTruthy();
  }));
});
