import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'about',
  styles: [`
    .bg-color {
      background-color: #f3f3f3;
      border-radius: 6px;
    }
  `],
  templateUrl: './about.component.html'
})

export class AboutComponent implements OnInit, AfterViewInit {
  bgcover = false;
  Alipay = false;
  WeChat = false;
  BAlipay = false;
  BWeChat = false;
  logs: string;

  showAlipay() {
    this.showQRCode('Alipay');
  }

  showWeChat() {
    this.showQRCode('WeChat');
  }

  showQRCode(type: string) {
    let bool = this.bgcover;
    if (bool){
      this[type] = !bool;
      setTimeout(() => {
        this.bgcover = !bool;
        this['B' + type] = !bool;
      }, 200);
    }else {
      this.bgcover = !bool;
      this['B' + type] = !bool;
      setTimeout(() => this[type] = !bool, 10);
    }
  }

  ngOnInit(): void {
    NProgress.start();
    this.logs = marked('基于 **Angular 2** & **tsc** 技术栈单页博客\r\n\r\n`重构` `ng2` `tsc` `es6` `webpack`\r\n\r\n持续更新中...\r\n\r\n## 日志\r\n\r\n### v1.0.0\r\n\r\n> 使用 ng2 和 tsc 重构所有模块，开发完成后第一版发布');
  }

  ngAfterViewInit(): void {
    NProgress.done();
  }
}