import { Component, OnInit,Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  imageGus = new Image('1','1 Solo objeto','esto es una descripción de la imagen','http://www.enclavedecine.com/wp-content/uploads/2017/08/spider-man-homecoming-300x200.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof2kJAQKRM41mFbCdDZNVTsFeTiRLSd6nYRnJ7mIdrrBO2zh-');
  imagesList : Image[] = [
    new Image('1','Arreglo de objetos','esto es una descripción de la imagen','http://www.enclavedecine.com/wp-content/uploads/2017/08/spider-man-homecoming-300x200.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof2kJAQKRM41mFbCdDZNVTsFeTiRLSd6nYRnJ7mIdrrBO2zh-'),
    new Image('1','Arreglo de objetos','esto es una descripción de la imagen','http://www.enclavedecine.com/wp-content/uploads/2017/08/spider-man-homecoming-300x200.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof2kJAQKRM41mFbCdDZNVTsFeTiRLSd6nYRnJ7mIdrrBO2zh-'),
    new Image('2','Arreglo de objetos','esto es una descripción de la imagen','http://www.enclavedecine.com/wp-content/uploads/2017/08/spider-man-homecoming-300x200.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCln47TlPQpAw1_qjx-QOtybo7cMUjCXO-FLaTBfZEkf5MoDd6PA'),
    new Image('3','Arreglo de objetos','esto es una descripción de la imagen','http://www.enclavedecine.com/wp-content/uploads/2017/08/spider-man-homecoming-300x200.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhDuc2oSKVPlP5Hf_nyEmlaRGnXCnEHr18Gy2JrpmvJRk6ok59Q'),
    new Image('4','Arreglo de objetos','esto es una descripción de la imagen','http://www.enclavedecine.com/wp-content/uploads/2017/08/spider-man-homecoming-300x200.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPkI35-KcCQ4-LEF-74VAxj1ohK2NdKLss97cMHxAq2uP3lq9'),
    new Image('5','Arreglo de objetos','esto es una descripción de la imagen','http://www.enclavedecine.com/wp-content/uploads/2017/08/spider-man-homecoming-300x200.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8FWq6QNUPpLJjqtkKFwUyU6Y7q5xELtJotpPqm2_aZiJFgoalA')
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
