import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Restaurant } from '../restaurants/restaurant.model';
import { comments } from '../restaurants/restaurant.model.comments';
import { FavoriteListService } from './favorite-list.service';
import { DataStorageService } from './data-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestaurentService implements OnInit{
  constructor(private flService: FavoriteListService, private http: HttpClient){
  }
  restaurentChanged = new EventEmitter<Restaurant[]>();
private index: number;
private usrRate: number;

private restaurants : Restaurant[] = [];
ngOnInit(){
}
  getRestaurants(){
    return this.restaurants;
  }

  setRestaurants(restaurants:Restaurant[]){
    this.restaurants=restaurants;
    this.restaurentChanged.emit(this.restaurants);

  }

  getOneRestaurantsTodiplay(index: number){
    return this.restaurants[index];
  }

  addRestauranttoFavoriteList(restaurant: Restaurant){
    this.flService.addRestaurant(restaurant);
    }

    addComment(index:number, comment: comments){
      this.restaurants[index].comments.unshift(comment);
    }

    setIndex(index){
      this.index=index;
      // console.log("index service:" + index);
    }
    getIndex(){
      return this.index;
    }
    setRate(rate:number){
      this.usrRate=rate;
      // console.log("index service:" + index);
    }
    getRate(){
      return this.usrRate;
    }

} 


