import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Dish } from '../menu/dish-list/dish.model';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.scss']
})
export class DishEditComponent implements OnInit {
  isEditingMode: boolean = false;
  dish: Dish = new Dish('', '', '', '', '', 0, 0, []);
  isLoading: boolean = false;
  id: string;
  toppings = new FormArray([]);

  constructor(
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params.id;
      if (id) {
        this.id = id;
        this.isLoading = true;
        this.isEditingMode = true;
        this.dataStorageService.getDish(id).subscribe((dish: Dish) => {
          this.dish = dish;
          this.isLoading = false;
        });
      }
    });
  }

  addTopping() {
    this.toppings.push(
      new FormGroup({
        name: new FormControl(null),
        price: new FormControl(null)
      })
    );
  }

  removeTopping(i) {
    this.toppings.removeAt(i);
  }

  debug() {
    console.log(this.toppings.value)
  }

  onSubmit(form) {
    if (!form.valid) {
      return;
    }
    this.dish = new Dish(
      this.id,
      form.value.category,
      form.value.img,
      form.value.name,
      form.value.description,
      form.value.weight,
      form.value.price,
      this.toppings.value
    );
    if (this.isEditingMode) {
      this.dataStorageService.updateDish(this.dish).subscribe(resp => {
        console.log(resp);
        this.router.navigate(['/']);
      });
    } else {
      this.dataStorageService.newDish(this.dish).subscribe(resp => {
        console.log(resp);
        this.router.navigate(['/']);
      });
    }
  }
}
