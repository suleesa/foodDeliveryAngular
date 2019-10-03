import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Dish } from '../dish.model';
import { DishListService } from '../dish-list.service';
import { ModalService } from '../../../shared/forModalBox/modal.service';
import { ConfirmComponent } from '../../../shared/confirm/confirm.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  @Input() dish: Dish;
  isAdmin: boolean = false;
  userSub: Subscription;

  constructor(
    private dishListService: DishListService,
    private modalService: ModalService,
    private router: Router,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      if (user) {
        this.isAdmin = user.isAdmin();
      } else {
        this.isAdmin = false;
      }
    });
  }
  select() {
    this.dishListService.dishSelected.emit(this.dish);
  }

  confirm() {
    this.modalService.init(
      ConfirmComponent,
      {
        isMobile: false,
        dish: this.dish
      },
      {}
    );
  }

  removeModal() {
    this.modalService.destroy();
  }
  startEdit() {
    console.log('navigation');
    this.router.navigate(['/dishEdit/', this.dish.id]);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  switchIsOn() {
    this.dish.available = !this.dish.available;
    console.log(this.dish.available);
    this.dataStorageService
      .updateDish(this.dish)
      .subscribe(resp => console.log(resp));
  }
}
