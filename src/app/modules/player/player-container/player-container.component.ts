import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AudioService } from '../audio.service';
import { StreamState } from 'src/app/models/stream-state';
import { File } from 'src/app/models/file';


@Component({
  selector: 'SDM-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
  files: Array<any> = [];
  state!: StreamState;

  @Input()currentFile?: File;
  @Output() onClose = new EventEmitter()

  constructor(public audioService: AudioService) { 
    this.audioService.getState().subscribe(state => {
      this.state = state
    })
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe(events => {

    });
  }

  // openFile(file: any) {
  //   this.currentFile = { file };
  //   this.audioService.stop();
  //   this.playStream(file.url);
  // }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  onSliderChangeEnd(change: any) {
    this.audioService.seekTo(change.value);
  }


  ngOnInit(): void {
  }

}
