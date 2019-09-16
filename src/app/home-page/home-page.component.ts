import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../order.service'
import { ModalService } from '../shared/forModalBox/modal.service'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


 constructor(private orderService:OrderService,
 		     private modalService:ModalService){}

@ViewChild('basket', {static:true}) basket;
// selectedFoodItem:FoodItem;

	
	ngOnInit(){
	this.orderService.foodItemOrdered
		.subscribe(()=>{
			this.basket.totalPrice = this.orderService.calculateTotalPrice()
      })


	}



 // testClick() {
 //    let inputs = {
 //      isMobile: false
 //    }
 //    this.modalService.init(SampleComponent, inputs, {});
 //  }

 //  removeModal(){
 //    this.modalService.destroy()
 //  }
}
