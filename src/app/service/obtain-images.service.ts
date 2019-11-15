import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtainImagesService {
  launchNumber : Number = 42;
  constructor(private http: HttpClient) { }
  updateLaunchNumber(inputNumber: Number): void {
    this.launchNumber = inputNumber;
  }
  getAnImage(): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${this.launchNumber}`);
  }

}
