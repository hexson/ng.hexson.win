import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()

export class AppService {
	private issuesUrl = 'json/data_callbak.json';

	private handleError(error: any): Promise<any> {
		console.error('ajax error:', error);
		return Promise.reject(error.message || error);
	}

	constructor(private http: Http){}

	getIssue(): Promise<any> {
		return this.http.get(this.issuesUrl)
		.toPromise()
		.then(res => res.json())
		.catch(this.handleError);
	} 
}