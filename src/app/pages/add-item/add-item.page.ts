import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage  {
  itemText:string='';
  items:any[]=[];
  constructor(public _http:HttpService) { }
 addItem(){
   let prams ={
     id:0,
    text:this.itemText,
    edit:true
  }
   this._http.post('posts',prams).subscribe(res=>{
     this.items.splice(0,0,res)
     console.log(this.items)
  },err=>console.error(err))
 }
 deleteItem(item){
  this.items.splice(this.items.indexOf(item),1)
 }
}
