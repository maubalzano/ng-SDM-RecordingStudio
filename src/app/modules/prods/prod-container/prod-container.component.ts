import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file';
import { AudioService } from '../../player/audio.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'SDM-prod-container',
  templateUrl: './prod-container.component.html',
  styleUrls: ['./prod-container.component.scss'],
  animations: [
    trigger(
      'toggle',
      [
        transition(
          ':enter',
          [
            style({ maxHeight:0}),
            animate('0.4s ease-out',
              style({ maxHeight: 600}))
          ]
        ),
        transition(
          ':leave',
            [
              style({ maxHeight:600}),
              animate('0.4s ease-in',
                style({maxHeight:0}))
            ]
        )
      ]
    )
  ],
})
export class ProdContainerComponent implements OnInit {
  currentFile?: File;  
  isPlaying!: boolean;

  constructor(public audioService: AudioService) { }
  
  playAudio(file: File) {
    this.currentFile = file;
    this.audioService.playStream(file.url).subscribe(events => {

    });
  }

  pause(){
    this.audioService.pause()
  }

  ngOnInit(): void {
    this.audioService.getIsPlaying().subscribe(isPlaying => this.isPlaying = isPlaying)
  }

}
