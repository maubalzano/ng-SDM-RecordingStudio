import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AudioService } from './audio.service';



const modules = [
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule
];


@NgModule({
  declarations: [
    PlayerContainerComponent
  ],
  imports: [
    modules,
    CommonModule
  ],
  exports: [
    modules,
    PlayerContainerComponent
  ]
})
export class PlayerModule { }
