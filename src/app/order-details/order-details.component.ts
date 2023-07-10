import { Component, OnInit } from '@angular/core';
import {KitchenStoryServiceService} from '../kitchen-story-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
   
  user:any;
  orderDetails:Array<any>=[];
   userJson:any[];
   total_amt:number;
   message:any;
  

  constructor(private service: KitchenStoryServiceService, private router:Router){};

  ngOnInit():void {
    
     this.user=this.service.user;
    let response=this.service.getOrder();
   // let response2=this.service.delfromcart();

    //Take res variable of type Response and  convert it to an Array using Array.of(), then access the contents of array using res['total_amt'] or res['ord_details'] 
    response.subscribe((res:Response)=>{
           // this.orderDetails=data;
           console.log("Inside response.subscribe");
             this.userJson=Array.of(res);
            console.log("Order Array: "+ this.userJson);
            this.total_amt=res['total_amt'];
            this.orderDetails=res['ord_details'];
            if(this.orderDetails!=null){
              console.log("Inside this.orderdetails if");
              this.delcart();
            }
            //let response2=this.service.delfromcart();

    }
            
            );
            console.log("Out of response.subscribe");

           /* if((this.total_amt!==0 )|| (this.total_amt!==undefined)){
              console.log("Total Amt:"+ this.total_amt);
              this.delcart();
            }*/
            //let response2=this.service.delfromcart();
            //response2.subscribe((data:any)=>this.message=data);
                
            //let response2=this.service.delfromcart();


  }

 public delcart(){
    console.log("Inside delcart()");
  let response2=this.service.delfromcart();
  response2.subscribe((data:any)=>this.message=data);
 }
  

  

}
