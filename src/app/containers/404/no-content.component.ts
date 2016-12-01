import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'no-content',
  styles: [`
    .not-found {
      width: 100%;
      height: 50rem;
      position: absolute;
      top: 50%;
      margin-top: -25rem;
    }
    .not-found p {
      color: #bbb;
    }
    .not-found p.f100 {
      font-size: 10rem;
      line-height: 16rem;
      padding-top: 12rem;
    }
    .not-found p.f30 {
      font-size: 3rem;
      line-height: 5rem;
      color: #ccc;
    }
    .not-found p.f20 {
      font-size: 2rem;
      line-height: 5rem;
      color: #ccc;
    }
  `],
  templateUrl: './no-content.component.html'
})

export class NoContentComponent implements OnInit, AfterViewInit {
  autoTips: string;
  time = 5;

  constructor (private router: Router) {}

  toHome() {
    setTimeout(() => {
      if (this.time > 0){
        this.time--;
        this.autoTips = this.time + 's 后自动跳转到首页';
        this.toHome();
        if (this.time == 0){
          this.router.navigate(['/']);
        }
      }
    }, 1000);
  }

  ngOnInit(): void {
    NProgress.start();
    this.autoTips = this.time + 's 后自动跳转到首页';
    this.toHome();
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}