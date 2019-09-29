import { Component, OnInit, Input } from '@angular/core';
import { DishListService } from '../../menu/dish-list/dish-list.service';
import { Dish } from '../../menu/dish-list/dish.model';
import { ModalService } from '../forModalBox/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.scss']
})
export class AreYouSureComponent implements OnInit {
  @Input() dish: Dish;
  constructor(
    private foodListService: DishListService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit() {}

  delete() {
    this.foodListService.deleteDish(this.dish);
    this.modalService.destroy();
  }

  toMenu() {
    this.modalService.destroy();
  }
}
