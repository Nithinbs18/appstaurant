import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { RestaurentService } from 'src/app/services/restaurant.service';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { userList } from '../user.model';
import { UserListService } from 'src/app/services/user-list.service';
import { FavoriteListService } from 'src/app/services/favorite-list.service';

@Component({
  selector: 'app-restaurent-details',
  templateUrl: './restaurent-details.component.html',
  styleUrls: ['./restaurent-details.component.css']
})
export class RestaurentDetailsComponent implements OnInit {

  restaurants: Restaurant[]=[];
  restaurant: Restaurant=new Restaurant("","",[],[],"");;
  id: number;
  userRating:number;
  usrList: userList[] = [];
   
  images: string[]=[];

  constructor(private restaurantService: RestaurentService,private authService:AuthService,
    private http: HttpClient,  private route: ActivatedRoute,private router: Router,private userListService:UserListService) { }

  ngOnInit() {
    let list=[];
    this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        this.restaurantService.setIndex(this.id);
        this.restaurant= this.restaurantService.getOneRestaurantsTodiplay(this.id);
        this.restaurants.push(this.restaurant);
        this.images=this.restaurant.imagePath;
        this.initImg = this.images[0];
        this.rateCount();
        const rst = this.restaurant;
        const usr:string = this.authService.getCurrentUser();
        console.log(usr);
          this.userListService.getUsrData()
          .subscribe(
            (usrList: userList[]) => {
              this.usrList = usrList;
              this.usrList.forEach(function(usrListItem)
              {
                  if(usrListItem.email == usr){
                  list = usrListItem.list;
                  // list.shift();
                  console.log(list);
                  usrListItem.list.push(rst.name);
                }
              })
            }
          );
       }
    )
  }
  initImg:string;

  onImgClick(index: number){
    this.initImg = this.restaurant.imagePath[index];
    console.log(index);
  }

  addToFav(){
    this.restaurantService.addRestauranttoFavoriteList(this.restaurant);
    console.log(this.usrList);
    this.userListService.storeUsrData(this.usrList).subscribe(
      (res :Response)=>{
      }
    );
}

rateCount(){
  let count =this.restaurant.comments.length;
  let i:number;
  let sum:number = 0;
  for(i=0; i<count; i++){
    sum+=this.restaurant.comments[i].rate;
  }
  this.userRating= sum/count;
}
i:number;

storeData() {
      return this.http.put('https://sad2db.firebaseio.com/usrList.json', this.usrList);
}
}