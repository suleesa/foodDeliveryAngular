import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './home-page/food-list/food-list.component';
import { FoodItemComponent } from './home-page/food-list/food-item/food-item.component';
import { HeaderComponent } from './header/header.component';
import { BasketComponent } from './home-page/basket/basket.component';
import { OrderService } from './order.service';
import { CountedDishEditComponent } from './home-page/food-list/counted-dish-edit/counted-dish-edit.component';
import { OrderComponent } from './order/order.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalService } from './shared/forModalBox/modal.service'
import { DomService } from './shared/forModalBox/dom.service'
import { FoodListService } from './home-page/food-list/food-list.service'

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodItemComponent,
    HeaderComponent,
    BasketComponent,
    CountedDishEditComponent,
    OrderComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
   entryComponents:[
   CountedDishEditComponent
  ],
  providers: [OrderService, ModalService, DomService, FoodListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
