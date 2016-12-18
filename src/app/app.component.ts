import { Component, OnInit } from '@angular/core';


import { BASE } from './constants/base';


@Component({
  selector: 'app',
  // styleUrls: ['./app.component.css'],
  template: '<router-outlet></router-outlet>'
})

export class AppComponent implements OnInit {
  baiduStatistics() {
    if (window.location.host.indexOf('hexson') >= 0){
      var _hmt: any[] = _hmt || [];
      (function(){
        var hm = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];
        hm.src = '//hm.baidu.com/hm.js?' + BASE['baidu'];
        s.parentNode.insertBefore(hm, s);
      })();
    }
  }

  duoshuoComments() {
    window['duoshuoQuery'] = { short_name: BASE['duoshuo'] };
    (function(){
      var ds = document.createElement('script');
      ds.type = 'text/javascript';
      ds.async = true;
      ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
      ds.charset = 'UTF-8';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
  }

  ngOnInit(): void {
    NProgress.configure({ showSpinner: false });
    this.baiduStatistics();
    this.duoshuoComments();
    console.log('%cWelcome to Hexson\'s blog.\n欢迎来到我的博客,商务合作及友链等请联系:\nE-mail - 1477546184@qq.com', 'color: #1d89e2; font-size: 13px; line-height: 20px;');
  }
}