import { Dish } from './dish.model';
import { DataStorageService } from '../../shared/data-storage.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

export class DishListService {
  private dishes: Dish[] = [];

  dishSelected = new EventEmitter();
  menuChanged = new Subject<Dish[]>();

  constructor(
    private http: HttpClient,
    private dataStorage: DataStorageService
  ) {}

  refreshDishes() {
    this.dataStorage.fetchMenu().subscribe(menu => {
      this.menuChanged.next(menu);
    });
  }

  deleteDish(dish: Dish) {
    let id = dish.id;
    this.dataStorage.deleteDish(id).subscribe(r => {
      this.refreshDishes();
    });
  }
}
