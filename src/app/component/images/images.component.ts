import { Component } from '@angular/core';
import { ObtainImagesService } from './../../service/obtain-images.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  title = 'funFunApp';
  js : void = this.get();
  jsonReturn : string;
  image: string = '<br>'

  constructor(private imageService : ObtainImagesService) {}

  get(){
    this.imageService.getAnImage().subscribe((c) => {
      console.log(c)
      this.jsonReturn = c.mission_name;
      let images = c.links.flickr_images;
      console.log(c.links.flickr_images[0]);
      images.forEach(image => {
        this.image += `<img width="400" height="400" src=${image}><br>`;
      });
    });
  }

}
