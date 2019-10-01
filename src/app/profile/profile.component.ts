import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ProfileService } from './profile.service';
import { OrderService } from '../order/order.service';
import { Order } from '../order/order.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile = new Profile(null, null, null, null);
  userSub: Subscription;
  userId: string = null;
  isLoading = false;
  orders: Order[] =[];

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.userSub = this.authService.user.subscribe(user => {
      if (user) {
        this.userId = user.id;
      }
    });
    this.profileService.getProfile(this.userId).subscribe(
      (p: Profile) => {
        if (p) {
          this.profile = p;
        }
        this.isLoading = false;
        console.log(this.profile);
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );

    this.orderService
      .getUserOrders(this.userId)
      .subscribe((orders: Order[]) => {
        this.orders = orders;
      });
  }

  onSubmit(form) {
    if (!form.valid) {
      return;
    }
    let newProfile = new Profile(
      form.value.name,
      form.value.telephone,
      form.value.address,
      this.userId
    );

    if (!this.profile) {
      this.profileService.saveProfile(this.userId, newProfile);
    }
    this.profileService.updateProfile(this.userId, newProfile);
  }
}
