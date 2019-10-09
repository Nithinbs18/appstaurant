import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RestaurentService } from 'src/app/services/restaurant.service';
import { comments } from '../../restaurant.model.comments';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { initTransferState } from '@angular/platform-browser/src/browser/transfer_state';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-restaurant-new-comment',
  templateUrl: './restaurant-new-comment.component.html',
  styleUrls: ['./restaurant-new-comment.component.css']
})
export class RestaurantNewCommentComponent implements OnInit {

  @ViewChild ('f')formToEdit :NgForm;
  // @Input() 
  id:number;
  subscription: Subscription;

  constructor(private restaurantService :RestaurentService, private route: ActivatedRoute,private router: Router
              ,private dataService: DataStorageService,private auth :AuthService) { }

  ngOnInit() {
    this.id= this.restaurantService.getIndex();
      console.log("index service:" + this.id);
  }

  cancle(){
    this.router.navigate(['/restaurants',this.id]);
  }

  addItem(form : NgForm){
    const val = form.value;
    const rating = this.restaurantService.getRate();
    console.log("rs:"+ rating);
    const newComment: comments = new comments(this.auth.currentUser,val.comment,rating);
    this.restaurantService.addComment(this.id,newComment);
    this.router.navigate(['/restaurants',this.id]);
    this.dataService.storeData().subscribe(
      (res :Response)=>{
        // console.log("button");
        // console.log(res);
      }
    );
  }
}

