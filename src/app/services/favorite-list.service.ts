import { Subject } from 'rxjs';
import { Restaurant } from '../restaurants/restaurant.model';

export class FavoriteListService  {
  startedEditing= new Subject<number>();
  restaurant: Restaurant[]=[];
list: string[];


  addToList(rest: Restaurant){
    this.restaurant.push(rest);
    
  }

  getRestaurants(){
  return this.restaurant;
  }

 addRestaurant(rest: Restaurant){
 this.restaurant.push(rest);
 console.log(this.restaurant)
   }

   deleteRestaurant(index: number){
     this.restaurant.splice(index ,1);
   }
   setList(names:string[]){
    this.list=names
  }
   
}
