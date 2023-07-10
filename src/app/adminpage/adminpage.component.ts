import { Component, OnInit } from '@angular/core';
import { KitchenStoryServiceService } from '../kitchen-story-service.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  user:any;

  constructor(private service:KitchenStoryServiceService){}

  ngOnInit():void{
      this.user=this.service.user;

  }

  

}
