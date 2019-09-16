import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component'
import { HomePageComponent } from './home-page/home-page.component'

const AppRoutes: Routes = [
{ path:'', component: HomePageComponent},
{ path:'order', component: OrderComponent},
{ path: '**', redirectTo:''},
];


@NgModule({
  imports:
    [RouterModule.forRoot(AppRoutes)],
  exports:
    [ RouterModule ]
})
export class AppRoutingModule{}
