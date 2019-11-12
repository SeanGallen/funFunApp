import { Component } from '@angular/core';
import { ObtainImagesService } from './../../service/obtain-images.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funFunApp';
  js : void = this.get();
  jsonReturn : string;
  imageOfLaunch;
  image;

  constructor(private imageService : ObtainImagesService) {}

  get(){
    this.imageService.getAnImage().subscribe((c) => {
      console.log(c)
      this.jsonReturn = c.mission_name;
      console.log(c.links.flickr_images[0]);
      this.imageOfLaunch = c.links.flickr_images[0];
      this.returnImage();
    });
  }
  returnImage() {
    this.image = `<img width="400" height="400" src=${this.imageOfLaunch}>`;
  }
}
