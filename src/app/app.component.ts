import { Component, OnInit } from '@angular/core';
import { KitchenStoryServiceService } from './kitchen-story-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Kitchen_Story';

  constructor(private service:KitchenStoryServiceService){}

  //appadmin:boolean=false;
  //user:any;
  
  ngOnInit():void{
    console.log("Inside AppInit");
  //this.appadmin=this.service.serviceadmin;
  //console.log("Appadmin: "+ this.appadmin);
  //this.user=this.service.user;
  //console.log("user: "+ this.user);
}



}