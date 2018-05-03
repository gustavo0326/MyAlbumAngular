import { Component, OnInit,Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  imageGus = new Image('1','The super shoes','esto es una descripción de la imagen','http://www.enclavedecine.com/wp-content/uploads/2017/08/spider-man-homecoming-300x200.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof2kJAQKRM41mFbCdDZNVTsFeTiRLSd6nYRnJ7mIdrrBO2zh-');
  constructor() { }

  ngOnInit() {
  }

}
