import { Component, OnInit } from '@angular/core';
import { rhItem } from 'src/app/models/rhItem';
import { rhItems } from 'src/assets/rehearsal-items';
@Component({
  selector: 'SDM-rehearsal-container',
  templateUrl: './rehearsal-container.component.html',
  styleUrls: ['./rehearsal-container.component.scss']
})
export class RehearsalContainerComponent implements OnInit {

  items: rhItem[] = rhItems;
  
  constructor() { }

  ngOnInit(): void {
  }

}
