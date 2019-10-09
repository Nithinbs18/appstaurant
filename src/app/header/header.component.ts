import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { auth } from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: DataStorageService, private auth:AuthService,private router: Router){}

  ngOnInit(){}
      status = false;
      showDrop() {
        this.status = !this.status;
     }

     usrLogout(){
       this.auth.logout();
       this.router.navigate(['/',"signin"]);
     }
}