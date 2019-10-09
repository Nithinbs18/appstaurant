import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { RestaurentService } from './restaurant.service';
import { Restaurant } from '../restaurants/restaurant.model';
import { AuthService } from '../auth/auth.service';



@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private restaurantService: RestaurentService, private auth: AuthService) {}
  private restaurants : Restaurant[] = [];

  storeData() {
    console.log("save");
    const token = this.auth.getToken();
    return this.http.put('https://sad-restaurant-application.firebaseio.com/restaurant.json?auth='+token, this.restaurantService.getRestaurants());
    
  }
  
}