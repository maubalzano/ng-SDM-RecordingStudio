import { Component, Input, OnInit } from '@angular/core';
import { rhItem } from 'src/app/models/rhItem';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'SDM-rh-item',
  templateUrl: './rh-item.component.html',
  styleUrls: ['./rh-item.component.scss'],
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
export class RhItemComponent implements OnInit {

  @Input() item!: rhItem;
  imgOpen: boolean = false;

  constructor() { }

  imgToggle(){
    this.imgOpen = !this.imgOpen
  }

  ngOnInit(): void {
  }

}
