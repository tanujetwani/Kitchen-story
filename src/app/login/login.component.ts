import { Component , OnInit } from '@angular/core';
import { User} from '../User';
import {KitchenStoryServiceService} from '../kitchen-story-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void{}
  //users:User;
  uname:any;
  pwd:any;
  message:string;
  //signin:boolean=false;
  user:any;
  admin:boolean=false;


  constructor(private service:KitchenStoryServiceService, private router:Router){}

  public login(){

    let response=this.service.loginNow(this.uname, this.pwd);

    console.log("Response: "+ response);
    
    //Response.subscribe is an asynchronous call so we never know when will it reurn, so call all the commands inside this.
    response.subscribe((data:any)=>{this.user=data; 
     // console.log("Message:"+ this.message);
      if (this.user!==null)
      {
        this.service.user=this.user;
        if(this.user.userType==="Customer"){
       this.router.navigate(['/searchform']);
      }

       if(this.user.userType==="Admin"){
        console.log("Inside Adminif");
        this.service.user=this.user;
        this.admin=true;
        this.service.serviceadmin=this.admin;
        console.log("admin:"+ this.admin);
        this.router.navigate(['/adminpage']);
       }
     // this.signin=true;
      
    }
      else{

        this.message="Incorrect username or password";   
         }    
      
  }); 
    //console.log("Users:"+ this.users );
    
   /* if(this.users!=null){

     this.signin=true;
      
    }
    else{

   this.message="Incorrect username or password";   
    } */



    /*if ((this.message) ==="Login Successful"){
       this.signin=true;
       

    }

    else{
      this.message="Incorrect username or password";
      
    }*/


  }

}
