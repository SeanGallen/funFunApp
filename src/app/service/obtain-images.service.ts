import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtainImagesService {

  constructor(private http: HttpClient) { }
  getAnImage(): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v3/launches/65');
  }

}
