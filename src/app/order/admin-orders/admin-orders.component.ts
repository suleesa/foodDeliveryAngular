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
  isLoading:boolean = false;
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.isLoading = true
    this.refreshOrders();
    this.refresh = setInterval(() => this.refreshOrders(), 8000)
  }


  refreshOrders(){
    this.orderService.getAllOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
      this.isLoading = false
      console.log('refresh')
    });
  }

  ngOnDestroy(){
    clearInterval(this.refresh)
  }
}
