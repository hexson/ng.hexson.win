import { Component, Input, OnInit } from '@angular/core';


import { HEXTOHSV } from '../lib/HEXTOHSV.HEXSON';


@Component({
  selector: 'single-views',
  template: `
    <div class="list">
      <h3 class="list-title mb15">
        <a class="black f22 title" routerLink="/article/{{v.number}}">{{v.title}}</a>
      </h3>
      <div class="mb30">
        <span class="list-time f12">{{v.created_at.substr(0,10)}}</span><a *ngFor="let val of v.labels" class="list-tag f12" [style.backgroundColor]="'#'+val.color" [style.color]="HEXTOHSV(val.color)[1] >= 50 || HEXTOHSV(val.color)[2] <= 50 ? '#ffffff' : ''">{{val.name}}</a>
      </div>
      <div class="list-view mb30 views" [innerHTML]="preview"></div>
      <a class="f14 gray" routerLink="/article/{{v.number}}">查看更多 +</a>
    </div>
  `
})

export class SingleViewsComponent implements OnInit {
  @Input('props') v: any;

  HEXTOHSV = HEXTOHSV;

  preview: string;

  ngOnInit(): void {
    this.preview = marked(this.v.body).substr(0,marked(this.v.body).match(/\n/)['index']);
  }
}