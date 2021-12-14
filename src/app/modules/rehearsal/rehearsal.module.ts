import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RehearsalContainerComponent } from './rehearsal-container/rehearsal-container.component';
import { RhItemComponent } from './rh-item/rh-item.component';



@NgModule({
  declarations: [
    RehearsalContainerComponent,
    RhItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RehearsalModule { }
