import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { appRoutingModule } from './app-routing';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurentDetailsComponent } from './restaurants/restaurent-details/restaurent-details.component';
import { RestaurentListComponent } from './restaurants/restaurent-list/restaurent-list.component';
import { RestaurentService } from './services/restaurant.service';
import { RestaurantItemComponent } from './restaurants/restaurent-list/restaurant-item/restaurant-item.component';
import { FestaurantStartComponent } from './restaurants/festaurant-start/festaurant-start.component';
import { FavoriteListService } from './services/favorite-list.service';
import { RestaurentAddedComponent } from './restaurants/restaurent-added/restaurent-added.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from 'node_modules/@angular/forms';
import { RestaurantNewCommentComponent } from './restaurants/restaurent-details/restaurant-new-comment/restaurant-new-comment.component';
import { DataStorageService } from './services/data-storage.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { RestaurantRatingComponent } from './restaurants/restaurent-details/restaurant-rating/restaurant-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModules } from './material.module';
import { UserListService } from './services/user-list.service';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from '@angular/material/grid-list';
import { ResetUserpasswordComponent } from './auth/reset-userpassword/reset-userpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoriteListComponent,
    RestaurantsComponent,
    RestaurentDetailsComponent,
    RestaurentListComponent,
    RestaurantItemComponent,
    FestaurantStartComponent,
    RestaurentAddedComponent,
    RestaurantNewCommentComponent,
    WelcomeComponent,
    SignupComponent,
    SigninComponent,
    RestaurantRatingComponent,
    ResetUserpasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    appRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModules,
    FlexLayoutModule,
    MatGridListModule
  ],
  providers: [RestaurentService, FavoriteListService,DataStorageService , AuthService , UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
