import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  orders: Order[];
  refresh
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.refreshOrders();
    this.refresh = setInterval(() => this.refreshOrders(), 5000)
  }


  refreshOrders(){
    this.orderService.getAllOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
      console.log('refresh')
    });
  }

  ngOnDestroy(){
    clearInterval(this.refresh)
  }
}
