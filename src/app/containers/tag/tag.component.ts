import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';


import { AppService } from '../../app.service';


@Component({
  selector: 'tag',
  templateUrl: './tag.component.html'
})

export class TagComponent implements OnInit, AfterViewInit, DoCheck {
  tag: string;
  issues: any[];
  loadingView = true;
  errorView = false;
  tagContent = false;
  loadBeforeText = '加载更早的文章';
  btnClass = 'load-before block f18 none';

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  switch(issues: any[]) {
    let switchIssues: any[] = [];
    for (let i = 0; i < issues.length; i++){
      for (let n = 0; n < issues[i].labels.length; n++){
        if (issues[i].labels[n].name == this.tag){
          switchIssues.push(issues[i]);
        }
      }
    }
    this.issues = switchIssues;
    this.loadingView = false;
    this.tagContent = true;
    this.btnClass = 'load-before block f18';
  }

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
    this.route.params
    .switchMap((params: any) => this.tag = params['tag'])
    .subscribe((tag: any) => { /*console.log(tag)*/ });
    if (!this.appService.issues){
      this.appService.getIssues()
      .then(data => {
        this.switch(data);
      })
      .catch(msg => this.errorView = true);
    }
    else {
      this.switch(this.appService.issues);
    }
  }

  ngDoCheck(): void {
    // this.route.params
    // .switchMap((params: any) => this.tag = params['tag'])
    // .subscribe((tag: any) => { /*console.log(tag)*/ });
    // if (this.appService.issues){
    //   let switchIssues: any[] = [];
    //   let issues: any[] = this.appService.issues;
    //   for (let i = 0; i < issues.length; i++){
    //     for (let n = 0; n < issues[i].labels.length; n++){
    //       if (issues[i].labels[n].name == this.tag){
    //         switchIssues.push(issues[i]);
    //       }
    //     }
    //   }
    //   this.issues = switchIssues;
    // }
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}