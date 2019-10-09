import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { RestaurentDetailsComponent } from './restaurants/restaurent-details/restaurent-details.component';
import { FestaurantStartComponent } from './restaurants/festaurant-start/festaurant-start.component';
import { RestaurentAddedComponent } from './restaurants/restaurent-added/restaurent-added.component';
import { RestaurantNewCommentComponent } from './restaurants/restaurent-details/restaurant-new-comment/restaurant-new-comment.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ResetUserpasswordComponent } from './auth/reset-userpassword/reset-userpassword.component';
const appRoutes: Routes=[
    {path: "", component:WelcomeComponent},
    {path: 'restaurants', component: RestaurantsComponent, children: [
        {path: '', component: FestaurantStartComponent},
        {path: ':id', component: RestaurentDetailsComponent, children: [
            {path: 'new', component: RestaurantNewCommentComponent}
        ]},
        {path: ':id/added', component: RestaurentAddedComponent},
    ]},
    {path: 'favorite-list', component: FavoriteListComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'resetpw', component: ResetUserpasswordComponent},
    {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class appRoutingModule {

constructor(){
}
}