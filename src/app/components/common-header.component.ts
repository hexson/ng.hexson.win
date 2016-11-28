import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { BASE } from '../constants/base';


@Component({
  selector: 'common-header',
  template: `
    <div class="header ac">
      <div class="master f16">
        <b class="ac" (click)="handleClick()">{{BASE.master}}</b>
      </div>
      <nav-bar></nav-bar>
    </div>
  `
})

export class CommonHeaderComponent {
  BASE = BASE;

  constructor(private router: Router) {}
  
  handleClick(): void {
    this.router.navigate(['/']);
  }
}