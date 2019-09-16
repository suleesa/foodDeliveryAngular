import { Component, OnInit, Input } from '@angular/core';
import { FoodItem } from '../food-item.model'
import { OrderService } from '../../../order.service'
import { FoodListService } from '../food-list.service'

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {

  @Input() soup: FoodItem;


  constructor(private orderService:OrderService,
              private foodListService:FoodListService) { }

  ngOnInit() {


  }

 select(){
    this.orderService.dishSelected.emit(this.soup)
  }

  deleteDish(){
    this.foodListService.deleteDish(this.soup);
  }
}
