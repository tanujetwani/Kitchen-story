import { Component,OnInit } from '@angular/core';
import {KitchenStoryServiceService} from '../kitchen-story-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit{


  viewCartUser:any;
  cart:any;
  

  constructor(private service:KitchenStoryServiceService, private router:Router){}

ngOnInit():void{
 this.viewCartUser=this.service.user;
 let response=this.service.ViewCart(this.viewCartUser);
 response.subscribe((data:any)=>this.cart=data);

}

public searchform(){

  this.router.navigate(['/searchform']);
  //this.router.navigate(['/viewcart']);

}

public buyitems(){
    //this.router.navigate(['/orderpage']);
    this.router.navigate(['/getorderbreakout']);

}

}
