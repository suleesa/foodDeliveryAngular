import { Component, OnInit, Input  } from '@angular/core';
import { OrderService } from '../../order.service'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent{

	@Input() totalPrice:number;

	ngOnInit() {
		this.totalPrice = 0;
	}


		// canIOrder(){
		// 	if (this.totalPrice > 0){
		// 		return false
		// 	} else{
		// 		return true
		// 	}
		// }
	
}
