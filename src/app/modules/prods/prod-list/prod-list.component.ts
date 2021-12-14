import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { File } from 'src/app/models/file';
import { Prod } from 'src/app/models/prod';
import { productions } from '../../../../assets/productions';

@Component({
  selector: 'SDM-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {
  
  @Input() currentFileTitle?: string;
  @Input() isPlaying!: boolean;
  @Output() playAudio = new EventEmitter<File>();
  @Output() pause = new EventEmitter();
  
  prods: Prod[] = productions;

  constructor() { }

  ngOnInit(): void {
  }

}
