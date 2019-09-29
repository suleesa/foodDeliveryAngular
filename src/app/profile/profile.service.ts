import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router'

@Injectable({providedIn:'root'})


export class ProfileService{
	
	profile:Profile

	constructor(private http:HttpClient){}

	saveProfile(userId:string,profile:Profile){
		console.log(profile)
	   this.http.put('https://my-first-project-ea1d8.firebaseio.com/profiles/' + userId +'.json', profile).subscribe(
	      resp => console.log(resp))
	}

	getProfile(userId){
		return this.http.get('https://my-first-project-ea1d8.firebaseio.com/profiles/' + userId +'.json')
	}

	updateProfile(userId, newProfile){
		this.http.put('https://my-first-project-ea1d8.firebaseio.com/profiles/' + userId +'.json', newProfile).subscribe(
			resp => console.log(resp))
	}

}