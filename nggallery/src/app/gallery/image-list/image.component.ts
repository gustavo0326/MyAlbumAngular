import { Component, OnInit,Input } from '@angular/core';
import { Image } from '../../models/image';
@Component({
  selector: 'ng-image',
  templateUrl: './image.component.html',
  styleUrls: ['../gallery.component.css']
  /** otra forma usando backticks ``
   * ,styles: [`
    img {
      -webkit-box-shadow:0px 1px 6px 1px rgba(0,0,0,0.75); 
      -moz-box-shadow:0px 1px 6px 1px rgba(0,0,0,0.75);
      box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
      margin-bottom: 20px; 
      }
      img:hover{
          filter: gray; //ie 6-9
          -webkit-filter: grayscale(1);//resto
        }
        `]
   */
})
export class ImageComponent implements OnInit {
  @Input() imageInput:Image;
  constructor() { }

  ngOnInit() {
  }

}
