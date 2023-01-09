
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public geolocation:Geolocation) {

}
