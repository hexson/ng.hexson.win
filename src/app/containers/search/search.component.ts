import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit, AfterViewInit {
  keyword: string = '';

  constructor(
    private router: Router
  ) {}

  search(e: any) {
    if (e.keyCode == 13 && this.keyword != ''){
      this.router.navigate(['/q', this.keyword]);
    }
  }

  ngOnInit(): void {
    NProgress.start();
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}