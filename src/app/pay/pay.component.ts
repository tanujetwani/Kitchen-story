import { Component, OnInit } from '@angular/core';
import { KitchenStoryServiceService } from '../kitchen-story-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit{
cart:any;
total_amt:number=0;

constructor(private service:KitchenStoryServiceService, private router:Router){}

  ngOnInit():void{

    let response=this.service.orderbreakout();
    response.subscribe((data:any)=>{this.cart=data;
      
      for(var item of this.cart ){
         this.total_amt+=(item.kitem.priceperkg)*(item.qty);

      }

    }
      
      
      );

  }
      public pay(){
  
        this.router.navigate(['/payAmount']);
    
    
      }

  }

