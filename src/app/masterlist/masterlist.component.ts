import { Component, OnInit } from '@angular/core';
import { KitchenStoryServiceService } from '../kitchen-story-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masterlist',
  templateUrl: './masterlist.component.html',
  styleUrls: ['./masterlist.component.css']
})
export class MasterlistComponent  implements OnInit{

  items:any;

constructor(private service:KitchenStoryServiceService,private router:Router){}

  ngOnInit(): void {
    
    let response=this.service.getlistofitems();
    response.subscribe((data:any)=>this.items=data);



  }

  public gotoadminpage(){
      this.router.navigate(['/adminpage']);

  }


}
