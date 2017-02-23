import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Home2Page } from './home2';

@Component({
	templateUrl: 'demo.html'
})
export class DemoPage {

	constructor(public navCtrl: NavController) {

	}
	pushPage()
	{
		this.navCtrl.push(Home2Page)
	}
}
