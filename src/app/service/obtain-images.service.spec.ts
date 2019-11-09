import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ObtainImagesService } from './obtain-images.service';

let httpTestingController: HttpTestingController;
let service: ObtainImagesService; 

describe('ObtainImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObtainImagesService],
      imports: [HttpClientTestingModule]
    });

    service =  TestBed.get(ObtainImagesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return JSON', () => {
  });
});
