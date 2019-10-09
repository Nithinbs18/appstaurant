import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-userpassword',
  templateUrl: './reset-userpassword.component.html',
  styleUrls: ['./reset-userpassword.component.css']
})
export class ResetUserpasswordComponent implements OnInit {
reset: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onReset(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.resetPw(email);
    this.reset = true;
  }

}
