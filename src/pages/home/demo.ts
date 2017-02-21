import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from './home';

@Component({
	templateUrl: 'demo.html'
})
export class DemoPage {

	constructor(public navCtrl: NavController) {

	}
	pushPage()
	{
		this.navCtrl.push(HomePage)
	}
}
