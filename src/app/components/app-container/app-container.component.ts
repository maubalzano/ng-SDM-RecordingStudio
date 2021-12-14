import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'SDM-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  route!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((ev: Event) => ev instanceof NavigationStart))
      .subscribe((value: any) => this.route = value.url)
  }

}
