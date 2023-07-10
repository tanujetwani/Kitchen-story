import { Component, OnInit } from '@angular/core';
import { KitchenItem} from '../KitchenItem';
import {KitchenStoryServiceService} from '../kitchen-story-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  item:KitchenItem=new KitchenItem();

  //category:any;
  //brand:any;

  item1:any;
  searchResult:boolean=false;
  message:any;
  message1:any;
  cart:any;
  cartmessage:any;
  user:any


  
  
  constructor(private service:KitchenStoryServiceService, private router:Router){}

 ngOnInit(): void{ this.user=this.service.user;}

 public searchFoodItems() {
  console.log("Category:"+ this.item.category);
  console.log("Brand:"+ this.item.brand);

  
  if((this.item.category===undefined|| this.item.category==="") && (this.item.brand===undefined || this.item.brand==="")){
         this.message="Enter some values in Category or Brand to search food items";

  }
  else{
  let response=this.service.searchItems(this.item);
  response.subscribe((data:any)=>{this.item1=data;
    
            this.searchResult=true;

    
    console.log("searchResults:" + this.searchResult);

    if(Object.keys(this.item1).length===0){
      this.message1="No Search Results found";
    }
  }  
    

    ); //end of response.subscribe
  }   //end of outer else

 }  //end of searchFoodItems()



 public bkToSearch(){

  this.searchResult=false;
  this.message="";
  this.message1="";
  this.cartmessage="";


}

public addtocart(pid:any, pname:any){

  
  let response=this.service.addToCart(pid);
  console.log("Response:"+ response);
  response.subscribe((data:any)=>{this.cart=data;

    if(this.cart!=null){
    
      this.cartmessage="Added " + pname +" To Cart";
    console.log("Cart Message:"+ this.cartmessage);
  }
}
    );
  
} 


public removefromcart(pid:any){
  console.log("Inside ts removefromcart");

  let response=this.service.removeFromCart(pid);

  response.subscribe((data:any)=>this.cartmessage=data);

}

public viewCart(){

      // this.user=this.service.user;
      this.router.navigate(['/viewcart']);
        
}

}
