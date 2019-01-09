import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FloorPage } from "../index.paginas";

@Component({
  selector: 'page-tower',
  templateUrl: 'tower.html',
})
export class TowerPage {

  torres:any[] = [
    {
      torre:"A",
      piso:"1",
      cantDeptos:8
    },
    {
      torre:"A",
      piso:"2",
      cantDeptos:8
    },
    {
      torre:"A",
      piso:"3",
      cantDeptos:8
    },
    {
      torre:"A",
      piso:"20",
      cantDeptos:4
    },
    {
      torre:"B",
      piso:"1",
      cantDeptos:6
    },
    {
      torre:"B",
      piso:"2",
      cantDeptos:6
    },
    {
      torre:"B",
      piso:"3",
      cantDeptos:6
    },
    {
      torre:"B",
      piso:"5",
      cantDeptos:5
    },
    {
      torre:"C",
      piso:"1",
      cantDeptos:8
    },
    {
      torre:"C",
      piso:"2",
      cantDeptos:8
    },
    {
      torre:"C",
      piso:"3",
      cantDeptos:8
    },
    {
      torre:"C",
      piso:"20",
      cantDeptos:4
    },
  ]


  edificio:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      console.log( navParams );
      this.edificio = this.navParams.get("edificio");
  }

  irPiso( torre:any ){
    this.navCtrl.push( FloorPage, { torre }); //torre es la llave y el objeto
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TowerPage');
  }

}
