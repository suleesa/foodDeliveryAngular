import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Dish } from '../menu/dish-list/dish.model';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  fetchMenu() {
    return this.http
      .get('https://my-first-project-ea1d8.firebaseio.com/soups.json')
      .pipe(
        map(foodItems => {
          console.log('fetchmenu map');
          let newFoodItems = [];
          for (let key in foodItems) {
            foodItems[key].id = key;
            if (!foodItems[key].toppings) {
              foodItems[key].toppings = []
            }
            newFoodItems.push(foodItems[key]);
          }
          return newFoodItems;
        })
      );
  }

  getDish(id) {
    return this.http.get(
      'https://my-first-project-ea1d8.firebaseio.com/soups/' + id + '.json'
    );
  }
  newDish(dish) {
    return this.http.post('https://my-first-project-ea1d8.firebaseio.com/soups.json', dish)
  }
  updateDish(dish){
    return this.http.put('https://my-first-project-ea1d8.firebaseio.com/soups/' + dish.id + '.json', dish)

  }

  deleteDish(id) {
    return this.http.delete(
      'https://my-first-project-ea1d8.firebaseio.com/soups/' + id + '.json'
    );
  }
}
