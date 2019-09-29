import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish.model';
import { CartService } from '../../../cart.service';
import { ModalService } from '../../../shared/forModalBox/modal.service';
import { CountedDish } from '../../../shared/counted-dish.model';

@Component({
  selector: 'app-/counted-dish-edit',
  templateUrl: './counted-dish-edit.component.html',
  styleUrls: ['./counted-dish-edit.component.scss']
})
export class CountedDishEditComponent implements OnInit {
  @Input() dish: Dish;

  countedDish: CountedDish;

  constructor(
    private cartService: CartService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    console.log(this.dish)
    this.countedDish = new CountedDish(
      this.dish,
      1,
      this.dish.toppings.map(topping => {
        return {
          name: topping.name,
          price: topping.price,
          selected: false
        };
      })
    );
  }

  toOrder() {
    this.cartService.addDish(
      this.countedDish.dish,
      this.countedDish.quantity,
      this.countedDish.toppings.filter(t => t.selected)
    );
    this.cartService.dishAdded.emit();
    this.modalService.destroy();
  }
}
