import { Component, OnInit } from '@angular/core';
import { DishListService } from './dish-list.service';
import { Dish } from './dish.model';
import { CartService } from '../../cart.service';
import { ModalService } from '../../shared/forModalBox/modal.service';
import { CountedDishEditComponent } from './counted-dish-edit/counted-dish-edit.component';
import { Subscription } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {
  dishes: Dish[];
  filtered_dishes: Dish[];
  selectedDish: Dish;
  menuChangedSub: Subscription;
  dishSelectedSub: Subscription;
  isLoading: boolean = true;
  searchQuery: string;
  se = new FormControl(null);
  isAdmin: boolean = false;
  userSub: Subscription;

  constructor(
    private dishListService: DishListService,
    private cartService: CartService,
    private modalService: ModalService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.filtered_dishes = this.dishes;

    this.se.valueChanges.subscribe(q => {
      if (q) {
        this.filtered_dishes = this.filterDishes(q);
      } else {
        this.filtered_dishes = this.dishes;
      }
    });
    this.userSub = this.authService.user.subscribe(user => {
      if (user) {
        this.isAdmin = user.isAdmin();
      } else {
        this.isAdmin = false;
      }
    });

    this.dishListService.refreshDishes();

    this.menuChangedSub = this.dishListService.menuChanged.subscribe(
      (dishes: Dish[]) => {
        this.dishes = dishes;
        this.filtered_dishes = dishes;
        this.isLoading = false;
      }
    );

    this.dishSelectedSub = this.dishListService.dishSelected.subscribe(
      (dish: Dish) => {
        this.selectedDish = dish;
        this.modalService.init(
          CountedDishEditComponent,
          {
            isMobile: false,
            dish: dish
          },
          {}
        );
      }
    );
  }

  filterDishes(query) {
    return this.dishes.filter(dish => {
      let regexp = RegExp(query, 'i');
      return dish.name.match(regexp) || dish.description.match(regexp);
    });
  }

  getSoups() {
    return this.filtered_dishes.filter(dish => dish.category === 'Суп');
  }
  getPastas() {
    return this.filtered_dishes.filter(dish => dish.category === 'Паста');
  }
  getPizzas() {
    return this.filtered_dishes.filter(dish => dish.category === 'Пицца');
  }
  getMains() {
    return this.filtered_dishes.filter(dish => dish.category === 'Горячее');
  }
  getDesserts() {
    return this.filtered_dishes.filter(dish => dish.category === 'Десерт');
  }

  removeModal() {
    this.modalService.destroy();
  }

  ngOnDestroy() {
    this.menuChangedSub.unsubscribe();
    this.dishSelectedSub.unsubscribe();
  }
}
