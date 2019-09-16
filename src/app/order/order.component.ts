import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
totalPrice:number = 0;
order:{}[];
// @Input() 
  constructor(private orderService:OrderService) { }

refreshPrice(){
  this.totalPrice = this.orderService.calculateTotalPrice()
} 
  ngOnInit() {
  this.order = this.orderService.order
  this.refreshPrice()
  }
 

}
