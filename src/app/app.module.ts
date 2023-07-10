import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {KitchenStoryServiceService} from './kitchen-story-service.service';
import { LoginComponent } from './login/login.component';
import { SearchformComponent } from './searchform/searchform.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ValuearrayPipe } from './valuearray.pipe';
import { PayComponent } from './pay/pay.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddItemComponent } from './add-item/add-item.component';
import { RemoveItemComponent } from './remove-item/remove-item.component';
import { MasterlistComponent } from './masterlist/masterlist.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';




const routes:Routes=[
{path:"register", component:RegisterComponent},
{path:"login", component:LoginComponent},
{path:"viewcart", component:ViewCartComponent},
{path:"searchform", component:SearchformComponent},
{path:"payAmount" , component:OrderDetailsComponent},
{path:"getorderbreakout", component:PayComponent},
{path:"adminpage", component:AdminpageComponent},
{path:"additems", component:AddItemComponent},
{path:"removeitems", component:RemoveItemComponent},
{path:"listofitems", component:MasterlistComponent},
{path:"changepwd", component:ChangepwdComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SearchformComponent,
    ViewCartComponent,
    OrderDetailsComponent,
    ValuearrayPipe,
     PayComponent,
     AdminpageComponent,
     AddItemComponent,
     RemoveItemComponent,
     MasterlistComponent,
     ChangepwdComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [KitchenStoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
