import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  message: string;
  constructor() {}
  setMessage(m) {
    this.message = m;
  }

  destroyMessage() {
    this.message = null;
  }
}
