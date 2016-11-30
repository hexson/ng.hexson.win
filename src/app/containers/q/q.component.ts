import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';


import { AppService } from '../../app.service';


@Component({
  selector: 'query',
  templateUrl: './q.component.html'
})

export class QComponent implements OnInit, AfterViewInit {
  issues: any[];
  keyword: string = '';
  loadingView = false;
  errorView = false;
  btnClass = 'load-before block f18'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {}

  loadBefore(): void {
    if (this.btnClass.indexOf('load-before-animation') < 0){
      this.btnClass = 'load-before block f18 load-before-animation';
      setTimeout(() => this.btnClass = 'load-before block f18', 400);
    }
  }

  query(keyword: string) {
    if (!this.appService.issues){
      this.loadingView = true;
      this.appService.getIssues()
      .then(data => {
        let issues: any[] = [];
        for (let i = 0; i < data.length; i++){
          if (data[i].title.indexOf(keyword) >= 0 || data[i].body.indexOf(keyword) >= 0){
            issues.push(data[i]);
          }
        }
        this.issues = issues;
        this.loadingView = false;
      })
      .catch(msg => this.errorView = true);
    }else {
      let issues: any[] = [];
      let data: any[] = this.appService.issues;
      for (let i = 0; i < data.length; i++){
        if (data[i].title.indexOf(keyword) >= 0 || data[i].body.indexOf(keyword) >= 0){
          issues.push(data[i]);
        }
      }
      this.issues = issues;
    }
  }

  search(e: any) {
    if (e.keyCode == 13 && this.keyword != ''){
      this.router.navigate(['/q', this.keyword]);
      this.query(this.keyword);
    }
  }

  ngOnInit(): void {
    NProgress.start();
    this.route.params
    .switchMap((params: any) => this.keyword = params['keyword'])
    .subscribe((keyword: any) => { /*console.log(keyword)*/ });
    if (this.keyword != ''){
      this.query(this.keyword);
    }
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}