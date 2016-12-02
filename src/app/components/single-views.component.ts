import { Component, ElementRef, Input, OnInit } from '@angular/core';


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

  constructor(private doc: ElementRef) {}

  ngOnInit(): void {
    let body = marked(this.v.body);
    this.preview = /^<pre>/.test(body) ? body.substr(0, body.match(/<\/pre>/)['index']) : body.substr(0, body.match(/\n/)['index']);
    if (/^<pre>/.test(body)){
      setTimeout(() => {
        let pre = this.doc.nativeElement.getElementsByTagName('pre');
        console.log(this.doc.nativeElement.getElementsByTagName('pre'));
        let hljs = window['hljs'];
        for (let i = 0; i < pre.length; i++){
          let code = pre[i].getElementsByTagName('code');
          for (let n = 0; n < code.length; n++){
            hljs.highlightBlock(code[n]);
          }
        }
      }, 1);
    }
  }
}