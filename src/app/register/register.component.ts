import { Component , OnInit } from '@angular/core';
import { User} from '../User';
import {KitchenStoryServiceService} from '../kitchen-story-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  ngOnInit(): void{}
  constructor(private service:KitchenStoryServiceService){}

  user:User=new User();
  message:any;

  public registerNow(){

    console.log("inside registerNow");
    console.log("Username :"+ this.user.uname);
    console.log("Phone: "+ this.user.uphone);
    console.log("Address: "+ this.user.uaddress);

    if(this.user.uname===""|| this.user.uname===undefined){
           this.message="Enter a username";
    } 

    else if(this.user.upasswd===""|| this.user.upasswd===undefined){
           this.message="Enter a password";

    }

    else if ((this.user.uname===""|| this.user.uname===undefined) && (this.user.upasswd==="" || this.user.upasswd===undefined)){
            this.message="Enter valid username and password";

    }
    else if (this.user.userType===undefined){
          this.message="Select a User Type";
    }
      
      else  {
    let response=this.service.register(this.user);
    response.subscribe((data:any)=>this.message=data);
  }

  }

  

}
