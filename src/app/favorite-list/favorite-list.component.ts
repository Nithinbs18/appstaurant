import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant.model';
import { FavoriteListService } from '../services/favorite-list.service';
import { userList } from '../restaurants/user.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
restaurants: Restaurant[];
list= [];
usrList: userList[]
email = this.auth.currentUser;
rest_id: number;

showBtn = false;
  constructor(private flservice: FavoriteListService, private auth : AuthService,private http: HttpClient,private router: Router) {
   
   }

   setList(names: string[]){
     this.list=names;
   }
list2= [];

  ngOnInit() {
    this.getUsrData().subscribe(
      (usrListDB: userList[]) => {
        this.usrList = usrListDB;
        console.log(this.usrList);
        console.log(this.email);
      });
  }


  filter(){
    let email = this.auth.currentUser;
        this.usrList.forEach(function(usrListItem: userList)
              {
                if(usrListItem.email == email){
                console.log(usrListItem.email +"     "+email);
                 usrListItem.list.forEach(function(name){
                this.list2.push(name);
                 }
                 );
                console.log(this.list2);
                // this.restaurants= list2;
                }
              })
  }

  show(i)
  {
    this.getIndex(i);
    this.showBtn = !this.showBtn;
  }

  onInfo(){
    this.router.navigate(['/',"restaurants",this.rest_id]);
    this.showBtn = false;
  }

  getUsrData(){
    return this.http.get('https://sad2db.firebaseio.com/usrList.json');
}

getIndex(name: string){
  switch(name) { 
     case "Raja Rani": { 
        this.rest_id = 0;
        break; 
     } 
     case "Taj Mahal Tandoori": { 
      this.rest_id = 1;
        break; 
     } 
     case "Saffron Heidelberg": {
      this.rest_id = 2;      
        break;    
     } 
     case "Kaschmir Tandoori 1": { 
      this.rest_id = 3;
      break; 
     }  
     case "Indian Palace": { 
      this.rest_id = 4;
      break; 
   }  
   case "Punjab Curry": { 
    this.rest_id = 5;
    break; 
    }  
    case "Long Delhi": { 
      this.rest_id = 6;
      break; 
    } 
    case "Maharaja Heidelberg": { 
      this.rest_id = 7;
      break; 
    }
    case "Moghul Tandoori": { 
      this.rest_id = 8;
      break; 
    }
    case "Masala": { 
      this.rest_id = 9;
      break; 
    }
     default: { 
      this.rest_id = 0;
        break;              
     } 
  }
}

}



