import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'SDM-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.scss']
})
export class GalleryContainerComponent implements OnInit {
  images: Image[];
  selectedImage?: Image;

  constructor(public galleryService: GalleryService) {
    this.images = galleryService.images
  }

  selectImg(img: Image){
    this.selectedImage = img;
  }

  unselectImg(){
    delete this.selectedImage
  }

  nextImg(){
    const index: number = this.images.indexOf(this.selectedImage!) + 1;
    this.selectedImage = index < this.images.length ? this.images[index] : this.images[0];
  }

  previousImg(){
    const index: number = this.images.indexOf(this.selectedImage!) - 1;
    this.selectedImage = index >= 0 ? this.images[index] : this.images[this.images.length - 1]
  }

  ngOnInit(): void {
  }

}
