import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { CountedDish } from '../../shared/counted-dish.model';
import { Order } from '../order.model';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Profile } from '../../profile/profile.model';
import { ProfileService } from '../../profile/profile.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {
  totalPrice: number = 0;
  countedDishes: CountedDish[];
  guestAmount: number = 1;
  userSub: Subscription;
  userId: string = null;
  profile: Profile = new Profile(null, null, null, null);
  isLoading: boolean = true;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.countedDishes = this.cartService.countedDishes;
    this.refreshPrice();
    this.userSub = this.authService.user.subscribe(user => {
      if (user) {
        this.userId = user.id;
        console.log(user);
        this.refreshProfile()
      }
    });

   this.refreshProfile()
  }

  refreshProfile() {
    this.profileService.getProfile(this.userId).subscribe((p: Profile) => {
      if (p) {
        this.profile = p;
      }
      this.isLoading = false;
    });
  }

  refreshPrice() {
    this.totalPrice = this.cartService.calculateTotalPrice();
  }

  increaseAmountGuest() {
    this.guestAmount++;
  }

  decreaseAmountGuest() {
    if (this.guestAmount > 1) this.guestAmount--;
  }

  deleteDish(dish) {
    this.cartService.deleteDish(dish);
  }

  onSubmit(form) {
    if (!form.valid) {
      return;
    }
    let order = new Order(
      null,
      this.userId,
      form.value.name,
      form.value.telephone,
      form.value.address,
      this.countedDishes,
      this.guestAmount,
      this.cartService.calculateTotalPrice(),
      'waiting_confirmation',
      new Date()
    );
    this.orderService
      .newOrder(order)
      .subscribe(
        resp => this.router.navigate(['']),
        error => console.log(error)
      );
    form.reset();
    this.cartService.resetCart()
  }
}
