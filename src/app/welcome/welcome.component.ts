import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { RestaurentService } from '../services/restaurant.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 
  restaurants : Restaurant[] = [];
  login;

  constructor( private router: Router,private http: HttpClient,private restaurantService: RestaurentService, private authService: AuthService) { }
  title = 'restaurent-app';
  ngOnInit(){
    this.login = !this.authService.login;
   const token = this.authService.getToken();
    this.http.get('https://sad-restaurant-application.firebaseio.com/restaurant.json?auth='+token)
    .subscribe(
      (Restaurant: Restaurant[]) => {
        this.setVal(Restaurant);
      }
    );
  }

  setVal(restaurants : Restaurant[]){
    this.restaurants = restaurants;
    this.restaurantService.setRestaurants(this.restaurants);
  }
}
