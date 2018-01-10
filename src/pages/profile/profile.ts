import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	id;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.id = this.navParams.get('id');
  }

}
