import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'SDM-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {
  @Output() selectImg = new EventEmitter<Image>()
  @Input() images!: Image[];

  constructor() { }

  ngOnInit(): void {
  }

}
