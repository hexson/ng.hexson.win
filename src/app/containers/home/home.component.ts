import { Component } from '@angular/core';

import { BASE } from '../../constants/base';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  BASE = BASE;
}