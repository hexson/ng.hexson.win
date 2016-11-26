import { Component, OnInit } from '@angular/core';
import marked from 'marked';

import { AppService } from '../../app.service';

import { BASE } from '../../constants/base';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  BASE = BASE;
  constructor(private appService: AppService) {}
  ngOnInit(): void {
  	this.appService.getIssue().then(data => console.log(data));
  	console.log(marked)
  }
}