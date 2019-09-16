import { Component, OnInit } from '@angular/core';
import { FoodListService } from './food-list.service'
import { FoodItem } from './food-item.model'
import { OrderService } from '../../order.service'
import { ModalService } from '../../shared/forModalBox/modal.service'
import { CountedDishEditComponent } from './counted-dish-edit/counted-dish-edit.component'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  //providers:[FoodListService]
})
export class FoodListComponent implements OnInit {
soups:FoodItem[];
selectedFoodItem:FoodItem;

  constructor(private foodListService:FoodListService,
  			  private orderService:OrderService, 
          private modalService:ModalService){}

  ngOnInit() {
  	this.soups = this.foodListService.getSoups()
 
 	this.orderService.dishSelected
  	.subscribe(dish =>{
  		this.selectedFoodItem = dish
      this.modalService.init(CountedDishEditComponent, 
      {
      isMobile: false,
      soup:dish
    }, {});
  	})
  

  }

  removeModal(){
    this.modalService.destroy()
  }


    
  
}
