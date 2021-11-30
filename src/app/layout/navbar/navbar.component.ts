import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event} from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'SDM-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
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
export class NavbarComponent implements OnInit {
  route!: string;
  show: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((ev: Event) => ev instanceof NavigationStart))
      .subscribe((value: any) => this.route = value.url)
  }

}
