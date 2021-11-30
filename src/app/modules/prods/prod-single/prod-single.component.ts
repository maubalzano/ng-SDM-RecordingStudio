import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Prod } from 'src/app/models/prod';
import { File } from 'src/app/models/file';

@Component({
  selector: 'SDM-prod-single',
  templateUrl: './prod-single.component.html',
  styleUrls: ['./prod-single.component.scss']
})
export class ProdSingleComponent implements OnInit {
  @Input() prod!: Prod;
  @Output() playAudio = new EventEmitter<File>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
