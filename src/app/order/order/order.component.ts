import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order.model';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service'

import { NotificationService } from '../../shared/notification.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  isAdmin: boolean = false;
  userSub: Subscription;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private notificationService:NotificationService
  ) {}

  ngOnInit() {
    
    this.userSub = this.authService.user.subscribe(user => {
      if (user) {
        this.isAdmin = user.isAdmin();
      } else {
        this.isAdmin = false;
      }
    });
  }
  checkStatus() {
    if (this.order.status === 'waiting_confirmation') {
      return 'Заказ ожидает подтверждения';
    }
    if (this.order.status === 'cooking') {
      return 'Заказ готовится';
    }
    if (this.order.status === 'sent') {
      return 'Заказ передан курьеру на доставку';
    }
    if (this.order.status === 'waiting_confirmation') {
      return 'Заказ доставлен';
    }

  }

  changeStatus(s) {
    this.order.status = s;
    this.orderService.updateOrder(this.order);
    this.notificationService.setMessage('Заказ обновлен')
  }

  repeatOrder(){
    this.order.date = new Date()
    this.order.status = 'waiting_confirmation'
    this.orderService.newOrder(this.order).subscribe(
      resp => {
        console.log(resp);
        this.notificationService.setMessage('Ваш заказ успешно оформлен')
        
      })
  }

}
