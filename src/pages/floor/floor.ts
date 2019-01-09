import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApartmentPage } from "../index.paginas";

@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html',
})
export class FloorPage {

  torre:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log( navParams );
    this.torre = this.navParams.get("torre");
  }

  irDepto(){
    this.navCtrl.push( ApartmentPage );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FloorPage');
  }

}
