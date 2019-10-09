import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { userList } from 'src/app/restaurants/user.model';
import { HttpClient } from '@angular/common/http';
import { UserListService } from 'src/app/services/user-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,private http: HttpClient, private userListService:UserListService,private router: Router) { }

  ngOnInit() {
  }
  userExistance= false;
  created= false;
  init= true;


  onSignup(form: NgForm) {
    this.init = false;
    const email = form.value.email;
    const password = form.value.password;
    this.userExistance= !this.authService.signupUser(email, password);
    console.log(this.userExistance);
    if(!this.userExistance){
      this.created= true;
    }
    this.userListService.createNewUserListEntry();
  }
  
}

