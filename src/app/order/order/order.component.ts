import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  constructor(private orderService: OrderService) {}

  ngOnInit() {}
  checkStatus() {
    if (this.order.status === 'waiting_confirmation') {
      return 'Заказ ожидает подтверждения';
    }
  }

  changeStatus(s) {
    this.order.status = s
    this.orderService.updateOrder(this.order);
  }
}
