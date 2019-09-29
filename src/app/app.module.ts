import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishListComponent } from './menu/dish-list/dish-list.component';
import { DishComponent } from './menu/dish-list/dish/dish.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './menu/cart/cart.component';
import { CartService } from './cart.service';
import { CountedDishEditComponent } from './menu/dish-list/counted-dish-edit/counted-dish-edit.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { MenuComponent } from './menu/menu.component';
import { ModalService } from './shared/forModalBox/modal.service';
import { DomService } from './shared/forModalBox/dom.service';
import { DishListService } from './menu/dish-list/dish-list.service';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import { DishEditComponent } from './dish-edit/dish-edit.component';
import { AreYouSureComponent } from './shared/are-you-sure/are-you-sure.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderComponent } from './order/order/order.component';
import { AdminOrdersComponent } from './order/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishComponent,
    HeaderComponent,
    CartComponent,
    CountedDishEditComponent,
    OrderCreateComponent,
    MenuComponent,
    AuthComponent,
    SpinnerComponent,
    ProfileComponent,
    DishEditComponent,
    AreYouSureComponent,
    OrderListComponent,
    OrderComponent,
    AdminOrdersComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
],
  entryComponents: [
    CountedDishEditComponent,
    AuthComponent,
    OrderCreateComponent,
    AreYouSureComponent
  ],
  providers: [
    CartService,
    ModalService,
    DomService,
    DishListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
