import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()

export class AppService {
	issues: any[];
	labels: any[];
	private issuesUrl = '/json/data_callbak.json';
	private labelsUrl = '/json/labels.json';

	private handleError(error: any): Promise<any> {
		console.error('ajax error:', error);
		return Promise.reject(error.message || error);
	}

	constructor(private http: Http){}

	getIssues(): Promise<any[]> {
		return this.http.get(this.issuesUrl)
		.toPromise()
		.then(res => this.issues = res.json())
		.catch(this.handleError);
	}

	getLabels(): Promise<any[]> {
		return this.http.get(this.labelsUrl)
		.toPromise()
		.then(res => this.labels = res.json())
		.catch(this.handleError);
	}
}