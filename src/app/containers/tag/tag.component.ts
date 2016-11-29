import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';


import { AppService } from '../../app.service';
import { HEXTOHSV } from '../../lib/HEXTOHSV.HEXSON';


@Component({
  selector: 'tag',
  templateUrl: './tag.component.html'
})

export class TagComponent implements OnInit, AfterViewInit, OnChanges {
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
    console.log(11);
    for (let i = 0; i < issues.length; i++){
      for (let n = 0; n < issues[i].labels.length; n++){
        if (issues[i].labels[n].name == this.tag){
          switchIssues.push(issues[i]);
        }
      }
    }
    this.issues = switchIssues;
  }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    NProgress.start();
    this.route.params
    .switchMap((params: any) => this.tag = params['tag'])
    .subscribe((tag: any) => { /*console.log(tag)*/ });
    if (!this.appService.issues){
      this.appService.getIssues()
      .then(data => {
        this.switch(data);
        this.loadingView = false;
        this.tagContent = true;
        this.btnClass = 'load-before block f18';

      })
      .catch(msg => this.errorView = true);
    }
    else {
      this.switch(this.appService.issues);
      this.loadingView = false;
      this.tagContent = true;
      this.btnClass = 'load-before block f18';
    }
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}