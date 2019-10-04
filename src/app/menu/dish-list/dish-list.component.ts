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
  selectedDish: Dish;
  menuChangedSub: Subscription;
  dishSelectedSub: Subscription;
  isLoading: boolean = true;
  searchQuery: string;
  se = new FormControl(null);
  isAdmin: boolean = false;
  userSub: Subscription;
  q: string = '';

  constructor(
    private dishListService: DishListService,
    private cartService: CartService,
    private modalService: ModalService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.se.valueChanges.subscribe(q => {
      this.q = q;
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

  filteredDishes() {
    if (this.q.length > 0) {
      return this.availableDishes().filter(dish => {
        let regexp = RegExp(this.q, 'i');
        return dish.name.match(regexp) || dish.description.match(regexp);
      });
    } else {
      return [];
    }
  }

  availableDishes() {
    if (this.isAdmin) {
      return this.dishes;
    } else {
      return this.dishes.filter(dish => dish.available);
    }
  }

  getSoups() {
    return this.availableDishes().filter(dish => dish.category === 'Суп');
  }
  getPastas() {
    return this.availableDishes().filter(dish => dish.category === 'Паста');
  }
  getPizzas() {
    return this.availableDishes().filter(dish => dish.category === 'Пицца');
  }
  getMains() {
    return this.availableDishes().filter(dish => dish.category === 'Горячее');
  }
  getDesserts() {
    return this.availableDishes().filter(dish => dish.category === 'Десерт');
  }

  removeModal() {
    this.modalService.destroy();
  }

  ngOnDestroy() {
    this.menuChangedSub.unsubscribe();
    this.dishSelectedSub.unsubscribe();
  }
}
