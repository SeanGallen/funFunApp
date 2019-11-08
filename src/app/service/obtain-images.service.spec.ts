import { TestBed } from '@angular/core/testing';

import { ObtainImagesService } from './obtain-images.service';

describe('ObtainImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtainImagesService = TestBed.get(ObtainImagesService);
    expect(service).toBeTruthy();
  });
});
