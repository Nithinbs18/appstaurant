import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { RestaurentService } from './restaurant.service';
import { Restaurant } from '../restaurants/restaurant.model';
import { AuthService } from '../auth/auth.service';
import { userList } from '../restaurants/user.model';



@Injectable()
export class UserListService {
  constructor(private http: HttpClient, private restaurantService: RestaurentService, private auth: AuthService) {}
  private restaurants : Restaurant[] = [];
  usrLists: userList[];

  storeData() {
    console.log("save");
    const token = this.auth.getToken();
    return this.http.put('https://sad-restaurant-application.firebaseio.com/restaurant.json?auth='+token, this.restaurantService.getRestaurants());
  }

  createNewUserListEntry(){
    this.getUsrData().subscribe(
      (usrListDB: userList[]) => {
        this.usrLists = usrListDB;
        let email = this.auth.currentUser;
        const usrList: userList = new userList(email,[""]);
        console.log(this.usrLists);
        console.log(usrList);
        this.usrLists.push(usrList);  
        console.log(this.usrLists);
        this.storeUsrData(this.usrLists)
        .subscribe(
            (res :Response)=>{ } 
            );
      } );
    }
    
    getUsrData(){
        return this.http.get('https://sad2db.firebaseio.com/usrList.json');
    }

    storeUsrData(usrLists:userList[]) {
        return this.http.put('https://sad2db.firebaseio.com/usrList.json', usrLists);
    }

}
