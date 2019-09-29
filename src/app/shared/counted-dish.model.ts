import { Dish } from '../menu/dish-list/dish.model';
import { SelectableTopping } from '../menu/dish-list/counted-dish-edit/selectableTopping.interface';

export class CountedDish {
  constructor(
    public dish: Dish,
    public quantity: number,
    public toppings: SelectableTopping[]
  ) {}

  calculatePrice() {
    let toppingsPrice = this.toppings
      .filter(topping => topping.selected === true)
      .map(topping => topping.price)
      .reduce((a, b) => {
        return a + b;
      }, 0);
    return this.dish.price * this.quantity + toppingsPrice;
  }

  removeTopping(topping) {
    let i = this.toppings.indexOf(topping);
    this.toppings.splice(i, 1);
  }

  increaseAmount() {
    this.quantity++;
  }

  decreaseAmount() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
