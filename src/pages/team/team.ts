import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController  } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
	data=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  	this.data = [{
  		'role':'UI Developer',
  		'name':'Mathan M',
  		'team':'Dev',
  		'img':'1.jpg'
  	}]
  }
  openImg(imgId){
  	let popover = this.popoverCtrl.create(ProfilePage,{"id":imgId});
    popover.present();
  }
}
