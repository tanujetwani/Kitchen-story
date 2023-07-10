import { Component, OnInit } from '@angular/core';
import { KitchenStoryServiceService } from '../kitchen-story-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {
  
  user:any;
  password:String;
  confirmpwd:String;
  message:any

  constructor(private service :KitchenStoryServiceService,private router:Router){}

  ngOnInit():void{
        
    this.user=this.service.user;


  }

  public changepwd(){

          console.log("Inside change Pwd()");
         
          if(this.password!==this.confirmpwd){
               console.log("Inside if ");
                this.message= "Confirm New Password does not match New Password";
          }

          else{
            console.log("Inside else");
             let response=this.service.changepassword(this.confirmpwd);
             response.subscribe((data:any)=>{this.message=data;
              this.message="Password changed";
             }
             
              );

          }
        }



   public gotoadminpage(){
           
    this.router.navigate(['/adminpage']);

   }       


  }


