import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent {
	totalPrice: number = 0;

	constructor(private router: Router, private cartService: CartService) {}

	ngOnInit() {
		this.totalPrice = this.cartService.calculateTotalPrice();
		this.cartService.dishAdded.subscribe(() => {
			this.totalPrice = this.cartService.calculateTotalPrice();
		});
	}

	isEmpty() {
		return this.totalPrice === 0;
	}

	toOrder() {
		this.router.navigate(['order']);
	}
}
