import { Dish } from './menu/dish-list/dish.model';
import { CountedDish } from './shared/counted-dish.model';
import { EventEmitter } from '@angular/core';
import { SelectableTopping } from './menu/dish-list/counted-dish-edit/selectableTopping.interface';
import { Order } from './order/order.model';
import { Router } from '@angular/router';

export class CartService {
  constructor(private router: Router) {}

  private totalPrice: number = 0;

  countedDishes: CountedDish[] = [];

  dishAdded = new EventEmitter();

  addDish(dish: Dish, quantity: number, toppings: SelectableTopping[]) {
    let countedDish = this.countedDishes.find(
      countedDish =>
        countedDish.dish.id === dish.id &&
        countedDish.toppings === dish.toppings
    );
    if (!countedDish) {
      this.countedDishes.push(new CountedDish(dish, quantity, toppings));
    } else {
      countedDish.quantity++;
    }
  }

  deleteDish(countedDish: CountedDish) {
    let indexOfDishToDelete = this.countedDishes.indexOf(countedDish);
    this.countedDishes.splice(indexOfDishToDelete, 1);
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    this.countedDishes.forEach(
      countedDish => (this.totalPrice += countedDish.calculatePrice())
    );
    return this.totalPrice;
  }

  resetCart(){
    this.countedDishes=[]
    this.totalPrice=0;
  }
}
