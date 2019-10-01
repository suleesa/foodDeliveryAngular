import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../shared/forModalBox/modal.service';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../shared/notification.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private userSub: Subscription;

  mainPage: boolean = true;
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private modalService: ModalService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService:NotificationService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if (user) {
        this.isAdmin = user.isAdmin();
      } else {
        this.isAdmin = false;
      }
    });
    this.activatedRoute.url.subscribe(url => {
      this.mainPage = (url.length === 0);
    });
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

  closeNotification() {
    this.notificationService.destroyMessage()
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }


}
