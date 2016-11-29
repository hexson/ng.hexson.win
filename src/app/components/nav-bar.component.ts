import { Component } from '@angular/core';


import { MENU } from '../constants/menu';


@Component({
	selector: 'nav-bar',
	styles: [`
		.active {
			color: #222222
		}
	`],
	template: `
		<ul>
			<li *ngFor="let v of MENU">
				<a class="f14" routerLink="/{{v.path}}" routerLinkActive="active">{{v.name}}</a>
			</li>
		</ul>
	`
})

export class NavBarComponent {
	MENU = MENU;
}