import { Component, OnInit } from '@angular/core';
import { ObtainImagesService } from './../../service/obtain-images.service';
import { Observable, Subscription  } from 'rxjs';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  jsonReturn : string;
  image: string = '<br>'

  constructor(private imageService : ObtainImagesService) {}
  
  ngOnInit(){
    this.get();
  }

  pickLaunchNumber(launchNumber: string) {
    this.image = '<br>'
    if (launchNumber) {
      this.imageService.updateLaunchNumber(launchNumber);
    }
    this.get();
  }

  get(){
    this.imageService.getAnImage().subscribe((c) => {
      console.log(c)
      this.jsonReturn = c.mission_name;
      let images = c.links.flickr_images;
      images.forEach(image => {
        this.image += `<img width="400" height="400" src=${image}><br>`;
      });
    });
  }

}
