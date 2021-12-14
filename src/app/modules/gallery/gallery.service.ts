import { Injectable } from '@angular/core';
import { Image } from 'src/app/models/image';
import { images } from 'src/assets/images';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  images: Image[] = images;

  constructor() { }
}
