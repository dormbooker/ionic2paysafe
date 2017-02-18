import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
declare var paysafe: any;
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public loader;
	public paymentOption = null;
	public PafeSafeAPIKey = 'T1QtNzE5NTA6Qi1xYTItMC01OGE1MTQ3NC0xLTMwMmMwMjE0MDg4N2I5N2E3ZWE5YzYwZGQwZmE2MzU2NjQ0MTQzOTdmMTJjZWIxZDAyMTQ2OWM0NTFhYzYxOWM2ZjEyZWRmYjU0MDA4ZmIxZDlmMDkyMTYyNTVi';
	public PaySafeOptions = {
		environment: "TEST",
		fields: {
			cardNumber: {
				selector: "#paysafeCardNumber",
				placeholder: "Card number"

			},
			expiryDate: {
				selector: "#paysafeExpiryDate",
				placeholder: "Expiry date"

			},
			cvv: {
				selector: "#paysafeCVV",
				placeholder: "CVV"

			}
		}
	};
	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

	}
	
	showLoading() {
		this.loader = this.loadingCtrl.create({
			content: "Please wait..."
		});
		this.loader.present();
	}
	initPaySafe() {
		var thisObject=this;
		this.showLoading();
		paysafe.fields.setup(this.PafeSafeAPIKey, this.PaySafeOptions, function (instance, error) {

			thisObject.loader.dismiss();
			// When the customer clicks Pay Now,
			// call the SDK tokenize function to create
			// a single-use payment token corresponding to the card details entered
			document.getElementById("paysafePayNow").addEventListener("click", function (event) {
				console.log(instance.areAllFieldsValid());
				instance.tokenize(function (instance, error, result) {
					if (error) {
						// display the tokenization error in dialog window
						alert(JSON.stringify(error));
					} else {
						// write the Payment token value to the browser console
						console.log(result.token);
					}
				});
			}, false);
		});
	}

}
