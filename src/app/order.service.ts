import { FoodItem } from './home-page/food-list/food-item.model';
import { CountedDish } from './shared/counted-dish.model';
import { EventEmitter } from '@angular/core'
import { SelectableTopping } from './home-page/food-list/counted-dish-edit/selectableTopping.interface'

export class OrderService{

	

private totalPrice:number = 0;

	order:CountedDish[] = [];

dishSelected = new EventEmitter();
foodItemOrdered = new EventEmitter()

addToOrder(dish:FoodItem, quantity:number, toppings:SelectableTopping[]) {
  let countedDish = this.order.find(countedDish => countedDish.dish.id === dish.id)
  if (!countedDish) {
    this.order.push(
     new CountedDish (dish, quantity, toppings));
  } else {
    countedDish.quantity++;
  }
}

deleteItemFromOrder(dish){
  let indexOfDishToDelete = this.order.findIndex(countedDish => countedDish.dish.id === dish.id)
    this.order.splice(indexOfDishToDelete,1)
  }

deleteOneItemFromOrder(dish){
  let dishToDelete = this.order.find(countedDish => countedDish.dish.id === dish.id);
  let indexOfDishToDelete = this.order.indexOf(dishToDelete)
  if (dishToDelete.quantity > 1){
    dishToDelete.quantity --
  } else {
    this.order.splice(indexOfDishToDelete,1)
  }
}


getOrder(){
		return this.order
	}


calculateTotalPrice(){

  this.totalPrice=0;
	this.order
		.forEach(countedDish =>
			this.totalPrice += countedDish.calculatePrice());
  return this.totalPrice;
	}

//foodItemSelected = new EventEmitter<FoodItem>()

}