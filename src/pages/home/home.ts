import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Slides) slides: Slides;
	timeLine="day1";changeFlag = false;
  constructor(public navCtrl: NavController) {

  }
  onSlideChange(e){
  	let currentIndex = this.slides.getActiveIndex();
  	if(currentIndex == 1){
  	}else{
  	}
  }
  nextSlide(){
    this.slides.slideTo(2, 300);
  }
}
