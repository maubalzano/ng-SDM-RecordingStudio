import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdContainerComponent } from './prod-container/prod-container.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdSingleComponent } from './prod-single/prod-single.component';
import { PlayerModule } from '../player/player.module';
import { PlayerContainerComponent } from '../player/player-container/player-container.component';
import { AudioService } from '../player/audio.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ProdContainerComponent,
    ProdListComponent,
    ProdSingleComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PlayerModule

  ]
})
export class ProdsModule { }
