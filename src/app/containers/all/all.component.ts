import { Component, Input, OnInit, AfterViewInit } from '@angular/core';


import { AppService } from '../../app.service';


@Component({
	selector: 'all',
	templateUrl: './all.component.html'
})

export class AllComponent implements OnInit, AfterViewInit {
  issues: any[];
  loadingView = true;
  errorView = false;
  loadBeforeText = '加载更早的文章';
  btnClass = 'load-before block f18 none';

  constructor(
    private appService: AppService
  ) {}

  loadBefore(): void {
    if (this.loadBeforeText == '加载更早的文章'){
      this.loadBeforeText = '没有更多了';
    }else if (this.btnClass.indexOf('load-before-animation') < 0){
      this.btnClass = 'load-before block f18 load-before-animation';
      setTimeout(() => this.btnClass = 'load-before block f18', 400);
    }
  }

  ngOnInit(): void {
    NProgress.start();
    if (!this.appService.issues){
      this.appService.getIssues()
      .then(data => {
        this.issues = data;
        this.loadingView = false;
        this.btnClass = 'load-before block f18';
      })
      .catch(msg => this.errorView = true);
    }
    else {
      this.issues = this.appService.issues;
      this.loadingView = false;
      this.btnClass = 'load-before block f18';
    }
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}