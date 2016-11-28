import { Component } from '@angular/core';


@Component({
  selector: 'reload',
  template: `
    <div class="ac">
      <span class="lh18 block f16 mb15">阿哦出错了</span>
      <span class="reload f14" (click)="reload()">重新加载</span>
    </div>
  `
})

export class ReloadComponent {
  reload(): void {
    window.location.reload();
  }
}