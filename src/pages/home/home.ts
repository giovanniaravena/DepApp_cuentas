import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { TowerPage } from "../index.paginas";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  edificios:any[] = [
    {
      torre:"A",
      totalpisos:20
    },
    {
      torre:"B",
      totalpisos:5
    },
    {
      torre:"C",
      totalpisos:20
    }
  ]


  constructor(public navCtrl: NavController) {

  }

  irTorre( edificio:any ){
    console.log( edificio );
    this.navCtrl.push( TowerPage, { edificio }); //edificio es la llave y el objeto
  }

}
