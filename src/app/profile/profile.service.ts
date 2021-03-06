import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';

@Injectable({ providedIn: 'root' })
export class ProfileService {
	profile: Profile;

	constructor(
		private http: HttpClient,
		private notificationService: NotificationService
	) {}

	saveProfile(userId: string, profile: Profile) {
		this.http
			.put(
				'https://my-first-project-ea1d8.firebaseio.com/profiles/' +
					userId +
					'.json',
				profile
			)
			.subscribe(resp =>
				this.notificationService.setMessage('Ваш профиль успешно сохранен')
			);
	}

	getProfile(userId) {
		return this.http.get(
			'https://my-first-project-ea1d8.firebaseio.com/profiles/' +
				userId +
				'.json'
		);
	}

	// updateProfile(userId, newProfile) {
	// 	this.http
	// 		.put(
	// 			'https://my-first-project-ea1d8.firebaseio.com/profiles/' +
	// 				userId +
	// 				'.json',
	// 			newProfile
	// 		)
	// 		.subscribe(resp =>
	// 			this.notificationService.setMessage('Ваш профиль успешно изменен')
	// 		);
	// }
}
