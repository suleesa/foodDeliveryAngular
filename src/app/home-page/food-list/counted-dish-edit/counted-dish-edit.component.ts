import { Component, OnInit, Input } from '@angular/core';
import { FoodItem } from '../food-item.model'
import { FoodListService } from '../food-list.service'
import { OrderService } from '../../../order.service'
import { ModalService } from '../../../shared/forModalBox/modal.service'
import { SelectableTopping } from './selectableTopping.interface'
import { CountedDish } from '../../../shared/counted-dish.model'

@Component({
  selector: 'app-/counted-dish-edit',
  templateUrl: './counted-dish-edit.component.html',
  styleUrls: ['./counted-dish-edit.component.scss']
})
export class CountedDishEditComponent implements OnInit {
  @Input() soup: FoodItem;

  countedDish: CountedDish;

  constructor(private foodListService: FoodListService,
    private orderService:OrderService, 
    private modalService:ModalService){}

  ngOnInit() {
    this.countedDish = new CountedDish(
      this.soup,
      1,
      this.soup.toppings.map((topping) => {
        return {
          name:topping.name,
          price:topping.price,
          selected:false
        }
      })
    )
  }
  
  toOrder(){
    this.orderService.addToOrder(
      this.countedDish.dish,
      this.countedDish.quantity,
      this.countedDish.toppings.filter(t => t.selected));
    this.orderService.foodItemOrdered.emit();
    this.modalService.destroy()
  }

  




}
