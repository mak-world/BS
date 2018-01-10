import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private callNumber: CallNumber) {

  }
  makePhoneCall(num){
  	this.callNumber.callNumber(num, true)
	  .then(() => console.log('Launched dialer!'))
	  .catch(() => console.log('Error launching dialer'));
  }
}
