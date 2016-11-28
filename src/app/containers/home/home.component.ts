import { Component, OnInit, AfterViewInit } from '@angular/core';


import { BASE } from '../../constants/base';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
  BASE = BASE;

  ngOnInit(): void {
    NProgress.start();
  }
  
  ngAfterViewInit(): void {
    NProgress.done();
  }
}