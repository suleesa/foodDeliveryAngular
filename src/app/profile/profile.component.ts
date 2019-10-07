import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ProfileComponent implements OnInit, OnDestroy {
  profile: Profile = new Profile(null, null, null, null);
  userSub: Subscription;
  userId: string = null;
  isLoading = false;
  orders: Order[] = [];
  refresh

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

    this.refreshOrders()
    this.refresh = setInterval(() => this.refreshOrders(), 8000)
  }

  refreshOrders(){
    this.orderService
      .getUserOrders(this.userId)
      .subscribe((orders: Order[]) => {
        this.orders = orders;
      });
  }

  setAddress(event) {
    this.profile.userAddress = event
  }

  onSubmit(form) {
    if (!form.valid) {
      return;
    }
    let newProfile = new Profile(
      form.value.name,
      form.value.telephone,
      this.profile.userAddress,
      this.userId,
      form.value.appartmentNumber
    );
    this.profileService.saveProfile(this.userId, newProfile);
    console.log(
      form.value.name,
      form.value.telephone,
      this.profile.userAddress,
      this.userId,
      form.value.appartmentNumber
    );
  }


  ngOnDestroy(){
    clearInterval(this.refresh)
  }
}
