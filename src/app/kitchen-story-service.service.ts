import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {KitchenItem} from './KitchenItem';
import {User} from './User';
import { HttpHeaders } from '@angular/common/http';

/*const httpOptionsPlain = {
   headers: new HttpHeaders({
     'Accept': 'text/plain',
     'Content-Type': 'text/plain'
   }),
   responseType: 'text'
 };*/
 

@Injectable({
  providedIn: 'root'
})
export class KitchenStoryServiceService {

  constructor(private http:HttpClient) { }

   message:any; 
   user:any;
   serviceadmin:boolean=false;
   

   public register(user:any){
    
    console.log("Inside Service Register");
    console.log("Username :"+ user.uname);
    console.log("Phone: "+ user.uphone);
    console.log("Address: "+ user.uaddress);

     return this.http.post("http://localhost:8080/register", user,{responseType:"text" as "json"});

   }


   public loginNow(username:any, pwd:any){
      

    //from stackoverflow syntax for path variables in url "return this.http.get<User>(`detail/${username}`, options); }
       return  this.http.get(`http://localhost:8080/login/${username}/${pwd}`);

   }


   public searchItems(item:KitchenItem){

      console.log("Inside Service searchItems");
      console.log("Category:"+ item.category);
      console.log("Brand:"+ item.brand);
      //console.log("Category Length:"+ item.category.length);
     // console.log("Brand Length:"+ item.brand.length);

      /*if(item.category===undefined && item.brand===undefined){

             console.log("Inside both undefined if");
              this.message="Enter some values in category or brand to search food items";
              return this.message;

      }*/

      if((item.brand===undefined || item.brand==="") && item.category.length>0){

         console.log("Inside brand undefined if");
         return this.http.get(`http://localhost:8080/getitemsByCategory/${item.category}`);
      }


      if((item.category===undefined || item.category==="" || item.category==="None")&& item.brand.length>0){
         console.log("Inside category undefined if");
         return this.http.get(`http://localhost:8080/getitemsByBrand/${item.brand}`);
      }

      if(item.category!=undefined && item.brand!=undefined ){
         console.log("Inside if");
         return this.http.get(`http://localhost:8080/getitemsByCategoryAndBrand/${item.category}/${item.brand}`);
  
      }

   
         return null;
    }

    

       // return this.http.get(`http:localhost:8080/getitems/${item.pname}/${item.category}/${item.brand}/${item.description}`)




       public addToCart(pid:any){

         //const json = this.http.post(`http://localhost:8080/addToCart/${pid}/${this.user.uid}`, {responseType: "text" as "json"});

         //console.log({key, json});

             return this.http.post(`http://localhost:8080/addToCart/${pid}/${this.user.uid}`,{responseType:"json"});

       }


       public removeFromCart(pid:any){
           
         console.log("Inside Service removeFromCart");

             return this.http.delete(`http://localhost:8080/removefromcart/${pid}/${this.user.uid}`,{responseType:"text" as "json"});

       }


       public ViewCart(viewCartUser:any){

            return this.http.get(`http://localhost:8080/getitemfromcart/${viewCartUser.uid}`);

       }


       public getOrder(){
         console.log("inside service getorder");

        return  this.http.post(`http://localhost:8080/generateOrder/${this.user.uid}`,{responseType:"json"});
       }


       public orderbreakout(){

           return this.http.get(`http://localhost:8080/getitemfromcart/${this.user.uid}`);
       }


       public delfromcart(){
         console.log("Inside Service del from cart");
          return this.http.delete(`http://localhost:8080/delfromcart/${this.user.uid}`,{responseType:"text" as "json"});

       }


       public additem(kitem:KitchenItem){

           return this.http.post(`http://localhost:8080/additems`, kitem,{responseType:"text" as "json"});


       }


       public removebyid(id:number){

         return this.http.delete(`http://localhost:8080/deleteitembyid/${id}`,{responseType: "text" as "json"});
       }

       public removebyname(name:any){

         return this.http.delete(`http://localhost:8080/deleteitembyname/${name}`, {responseType:"text" as "json"});

       }

       public removebycat(category:any){

            return this.http.delete(`http://localhost:8080/deleteitembycategory/${category}`, {responseType: "text" as "json"});

       }


       public getlistofitems(){
            
              return this.http.get(`http://localhost:8080/getAllitems`);

       }


       public changepassword(passwd:String){

         console.log("Inside Service chgpwd");
        return this.http.put(`http://localhost:8080/changepwd/${this.user.uname}/${passwd}`,{responseType: "text" as "json" });

         
       }

   }





