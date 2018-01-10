import {
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	GoogleMapOptions,
	CameraPosition,
	MarkerOptions,
	Marker
} from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';



@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {
	map: GoogleMap;
	myLoc: any;
	constructor(public navCtrl: NavController,private googleMaps: GoogleMaps,private geolocation: Geolocation,public toastCtrl: ToastController) {
		//AIzaSyCHDBBtCUgFkug6UI0W0kx-Iy3rkN2rjfE 
		this.geolocation.getCurrentPosition().then((resp) => {
		 // resp.coords.latitude
		 // resp.coords.longitude
		 this.myLoc = resp;
		 //alert(resp.coords.latitude);
		}).catch((error) => {
			//alert("error")
		  //alert(error);
		});

	}
	ionViewDidLoad() {
			this.loadMap();
	}
	presentToast() {
	    let toast = this.toastCtrl.create({
	      message: 'Click location marker to open location in Google Maps',
	      duration: 3000
	    });
	    toast.present();
  	}
	loadMap() {

		let mapOptions: GoogleMapOptions = {
			camera: {
				target: {
					lat: 12.6269,
					lng: 80.192711
				},
				zoom: 18,
				tilt: 30
			}
		};

		this.map = GoogleMaps.create('localmap', mapOptions);

		// Wait the MAP_READY before using any methods.
		this.map.one(GoogleMapsEvent.MAP_READY)
		.then(() => {
			this.map.addMarker({
				title: 'Mahabalipuram',
				icon: 'blue',
				animation: 'DROP',
				position: {
					lat: 12.6269,
					lng: 80.192711
				}
			})
			.then(marker => {
				marker.on(GoogleMapsEvent.MARKER_CLICK)
				.subscribe(() => {
					//alert('clicked');
					//this.map.open(marker);
				});
			});
		});
	}
	updateMap(lat,lon,tit){
		let cam:CameraPosition<any>;
		cam = {
			target: {
					lat: lat,
					lng: lon
				},
				zoom: 18,
				tilt: 25
		};
	      this.map.animateCamera(cam);
			this.map.clear();
			this.map.addMarker({
					title: tit,
					icon: 'blue',
					animation: 'DROP',
					position: {
						lat: lat,
						lng: lon
					}
				})
				.then(marker => {
					marker.on(GoogleMapsEvent.MARKER_CLICK)
					.subscribe(() => {
						//alert('clicked');
						//this.map.open(marker);
					});
				});
	}
}