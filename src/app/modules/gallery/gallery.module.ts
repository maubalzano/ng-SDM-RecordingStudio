import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryContainerComponent } from './gallery-container/gallery-container.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryFullscreenComponent } from './gallery-fullscreen/gallery-fullscreen.component';



@NgModule({
  declarations: [
    GalleryContainerComponent,
    GalleryListComponent,
    GalleryFullscreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GalleryModule { }
