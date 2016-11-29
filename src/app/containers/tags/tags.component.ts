import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { AppService } from '../../app.service';
import { HEXTOHSV } from '../../lib/HEXTOHSV.HEXSON';


@Component({
  selector: 'tags',
  templateUrl: './tags.component.html'
})

export class TagsComponent implements OnInit, AfterViewInit {
  labels: any[];
  HEXTOHSV = HEXTOHSV;
  loadingView = true;
  errorView = false;
  loadBeforeText = '加载更早的文章';
  btnClass = 'load-before block f18 none';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {}

  gotoTag(tag: string): void {
    this.router.navigate(['/tag', tag]);
  }

  ngOnInit(): void {
    NProgress.start();
    if (!this.appService.labels){
      this.appService.getLabels()
      .then(data => {
        this.labels = data;
        this.loadingView = false;
        this.btnClass = 'load-before block f18';
      })
      .catch(msg => this.errorView = true);
    }
    else {
      this.labels = this.appService.labels;
      this.loadingView = false;
      this.btnClass = 'load-before block f18';
    }
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}