import { Component, Input, OnInit, AfterViewInit } from '@angular/core';


import { AppService } from '../../app.service';


@Component({
	selector: 'all',
	templateUrl: './all.component.html'
})

export class AllComponent implements OnInit, AfterViewInit {
  issue: any[];
  loadingView = true;
  errorView = false;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    NProgress.start();
    if (!this.appService.issue){
      this.appService.getIssue()
      .then(data => {
        this.issue = data;
        this.loadingView = false;
      })
      .catch(msg => this.errorView = true);
    }
    else {
      this.issue = this.appService.issue;
      this.loadingView = false;
    }
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}