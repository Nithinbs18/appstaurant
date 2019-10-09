import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';

@Injectable()
export class AuthService {
  token: string;
  userExistance = false;
  currentUser : string;
  login = false;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    this.currentUser = email;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error =>{ 
          this.userExistance = true;
          console.log(error.message)}
      ) 
      return this.userExistance;
  }

  signinUser(email: string, password: string) {
    this.currentUser = email;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/',"welcome"]);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) =>{ this.token = token
                this.login = true;}
            )
        }
      )
      .catch(
        error =>{ console.log(error);
        alert("Wrong Password!! Please enter the right Credentials or reset the password.");}
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.login = false;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getCurrentUser(){
    return this.currentUser ;
  }

  resetPw(email :string){
    firebase.auth().sendPasswordResetEmail(email).then(function() {
    }).catch(function(error) {
      console.log(error)
    });
  }
}
