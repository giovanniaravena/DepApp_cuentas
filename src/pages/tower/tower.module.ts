import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TowerPage } from './tower';

@NgModule({
  declarations: [
    TowerPage,
  ],
  imports: [
    IonicPageModule.forChild(TowerPage),
  ],
})
export class TowerPageModule {}
