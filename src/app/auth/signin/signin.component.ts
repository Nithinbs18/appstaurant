import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from 'src/app/restaurants/restaurant.model';
import { RestaurentService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  restaurants : Restaurant[] = [];
  constructor(private authService: AuthService) { }

  ngOnInit() {
   
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

}
