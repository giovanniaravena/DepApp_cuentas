import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from "../index.paginas";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController ) {
  }

  ingresarSistema(){
    this.navCtrl.push( TabsPage );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
