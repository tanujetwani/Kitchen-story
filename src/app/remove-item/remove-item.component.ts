import { Component, OnInit } from '@angular/core';
import {KitchenStoryServiceService} from '../kitchen-story-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.css']
})
export class RemoveItemComponent implements OnInit {
  
  id:number;
  name:any;
  category:any;
  message:any;

  constructor(private service:KitchenStoryServiceService,private router:Router){}

  ngOnInit(): void {  }

  public removeitembyid(){

    let response=this.service.removebyid(this.id);
    response.subscribe((data:any)=>this.message=data);
      

  }

  public removeitembyname(){

     let response=this.service.removebyname(this.name);
     response.subscribe((data:any)=>this.message=data);
  }

  public removeitembycat(){
     let response=this.service.removebycat(this.category);
     response.subscribe((data:any)=> this.message=data);

  }


  public gotoadminpage(){
      this.router.navigate(['/adminpage']);

  }

}
