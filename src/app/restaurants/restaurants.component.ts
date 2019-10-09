import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurentService } from '../services/restaurant.service';
import { Restaurant } from './restaurant.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  constructor(private auth: AuthService,private router: Router){}
  ngOnInit(){
    console.log(this.auth.currentUser);
    if(!this.auth.currentUser){
      this.router.navigate(['/',"signin"]);      
    }

  }
}
