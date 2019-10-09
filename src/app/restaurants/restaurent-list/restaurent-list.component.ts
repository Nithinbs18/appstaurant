import { Component, OnInit } from '@angular/core';
import { RestaurentService } from 'src/app/services/restaurant.service';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.css']
})
export class RestaurentListComponent implements OnInit {

  constructor(private restaurentService : RestaurentService) { }
restaurants: Restaurant[];
  ngOnInit() {
    this.restaurants = this.restaurentService.getRestaurants();
  }

}
