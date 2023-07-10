import { Component, OnInit } from '@angular/core';
import {KitchenItem} from '../KitchenItem';
import {KitchenStoryServiceService} from '../kitchen-story-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
 
  kitem:KitchenItem=new KitchenItem();
  message:any;
  addeditem:boolean=false;
  constructor(private service:KitchenStoryServiceService, private router:Router){}

  ngOnInit(): void {
  }

  public addfooditem(){

     let response=this.service.additem(this.kitem);
     response.subscribe((data:any)=>{this.message=data;
       
      this.addeditem=true;
     }
      
      
      
      );

  }


  public addanotheritem(){
        console.log("Inside Another Item");
       this.router.navigate(['/adminpage']);


  }

  public gotoadminpage(){

    this.router.navigate(['/adminpage']);
  }

}
