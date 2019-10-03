import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  newOrder(order: Order) {
    return this.http.post(
      'https://my-first-project-ea1d8.firebaseio.com/orders.json',
      order
    );
  }

  updateOrder(order: Order) {
    this.http
      .put(
        'https://my-first-project-ea1d8.firebaseio.com/orders/' +
          order.id +
          '.json',
        order
      )
      .subscribe(resp => console.log(resp));
  }

  transformOrders(ordersMap) {
    let orders = [];
    for (let key in ordersMap) {
      ordersMap[key].id = key;
      orders.push(ordersMap[key]);
    }
    return orders
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getAllOrders() {
    return this.http
      .get('https://my-first-project-ea1d8.firebaseio.com/orders.json')
      .pipe(map(this.transformOrders));
  }
  getUserOrders(id) {
    return this.http
    
      .get(
        'https://my-first-project-ea1d8.firebaseio.com/orders.json?orderBy="userId"&equalTo="' +
          id +
          '"'
      )
      .pipe(map(this.transformOrders));
  }
}
