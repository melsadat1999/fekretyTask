import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { items } from 'src/app/service/interface.service';
import { ModalController } from '@ionic/angular';
import { ItemDetailsPage } from './item-details/item-details.page';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage implements OnInit {
 items:items[]=[];
  constructor(private _http:HttpService,public modalController: ModalController) {
    
    this._http.getData('posts').subscribe((res:any)=>{
      this.items = res.concat(res)
    })
   }
   async presentModal(item:items) {
    const modal = await this.modalController.create({
      component: ItemDetailsPage,
      componentProps:{
       data:item
      }
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
