import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { DishEditComponent } from './dish-edit/dish-edit.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { AdminOrdersComponent } from './order/admin-orders/admin-orders.component';

const AppRoutes: Routes = [
	{ path: '', component: MenuComponent },
	{
		path: 'profile',
		component: ProfileComponent,
		canActivate: [AuthGuard]
	},
	{ path: 'order', component: OrderCreateComponent },
	{ path: 'adminOrders', component: AdminOrdersComponent },
	{ path: 'dishCreate', component: DishEditComponent },
	{ path: 'dishEdit/:id', component: DishEditComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(AppRoutes, {
			useHash: false,
			anchorScrolling: 'enabled',
			onSameUrlNavigation: 'reload'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
