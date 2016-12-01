import { Component, ElementRef, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { AppService } from '../../app.service';
import { HEXTOHSV } from '../../lib/HEXTOHSV.HEXSON';


@Component({
  selector: 'article',
  templateUrl: './article.component.html'
})

export class ArticleComponent implements OnInit, AfterViewInit, DoCheck {
  id: string;
  data: any;
  content: string;
  href = window.location.href;
  loadingView = true;
  errorView = false;
  HEXTOHSV = HEXTOHSV;

  constructor(
    private doc: ElementRef,
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  findArticle(issues: any[], id: string) {
    for (let i = 0; i < issues.length; i++){
      if (issues[i].number == id){
        this.data = issues[i];
        break;
      }
    }
    this.content = marked(this.data.body);
    this.loadingView = false;
  }

  ngOnInit(): void {
    NProgress.start();
    this.route.params
    .switchMap((params: any) => this.id = params['id'])
    .subscribe((id: any) => { /*console.log(id)*/ });
    if (!this.appService.issues){
      this.appService.getIssues()
      .then(data => {
        this.findArticle(data, this.id);
      })
      .catch(msg => this.errorView = true);
    }else {
      this.findArticle(this.appService.issues, this.id);
    }
  }

  ngDoCheck(): void {
    if (this.appService.issues){
      let issues = this.appService.issues;
      for (let i = 0; i < issues.length; i++){
        if (issues[i].number == this.id){
          this.data = issues[i];
          break;
        }
      }
      this.content = marked(this.data.body);
      this.loadingView = false;
      let div = this.doc.nativeElement.getElementsByTagName('div');
      let pre = this.doc.nativeElement.getElementsByTagName('pre');
      let hljs = window['hljs'];
      for (let i = 0; i < pre.length; i++){
        let code = pre[i].getElementsByTagName('code');
        for (let n = 0; n < code.length; n++){
          hljs.highlightBlock(code[n]);
        }
      }
      window['DUOSHUO'] && window['DUOSHUO'].EmbedThread(div['ds'] && div['ds'].children);
    }
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}