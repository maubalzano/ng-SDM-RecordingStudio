import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'SDM-gallery-fullscreen',
  templateUrl: './gallery-fullscreen.component.html',
  styleUrls: ['./gallery-fullscreen.component.scss']
})
export class GalleryFullscreenComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  
  @Input() currentImage?: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
