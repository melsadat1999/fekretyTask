import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { items } from 'src/app/service/interface.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage  {
data:items;
  constructor(public navParams: NavParams,public modalCtrl: ModalController) {
    this.data = this.navParams.get('data');
   }


   close(){
    this.modalCtrl.dismiss();
   }

}
