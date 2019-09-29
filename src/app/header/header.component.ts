import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../shared/forModalBox/modal.service';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private userSub: Subscription;

  mainPage: boolean = false;
  isAuthenticated: boolean = false;
  isAdmin:boolean = false;

  constructor(
    private modalService: ModalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if (user){
        this.isAdmin = user.isAdmin()
      } else {
        this.isAdmin = false;
      }
    });
    this.router.url === '/' ? (this.mainPage = true) : (this.mainPage = false);
  }


  startAuth() {
    this.modalService.init(
      AuthComponent,
      {
        isMobile: false
      },
      {}
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
