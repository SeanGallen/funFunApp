import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtainImagesService {

  constructor(private http: HttpClient) { }
}
