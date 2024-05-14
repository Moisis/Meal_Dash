import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './features/users/user-home/user-home.component';
import { UserregisterComponent } from './features/Auth/user/userregister/userregister.component';
import { UserloginComponent } from './features/Auth/user/userlogin/userlogin.component';
import { RestaurantWizardComponent } from './features/restaurant_manager/restaurant-wizard/restaurant-wizard.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './Shared/components/profile/profile.component';
import {DashboardComponent} from "./features/restaurant_manager/dashboard/dashboard.component";
import {UserRestaurantListComponent} from "./features/users/user-restaurant-list/user-restaurant-list.component";
import { UserwizardComponent } from './features/Auth/user/userwizard/userwizard.component';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent }, // Home page
  { path: 'register', component: UserregisterComponent }, // Route for the Registration page
  { path: 'login', component: UserloginComponent }, // Route for the login page
  { path: 'rw', component: RestaurantWizardComponent }, // Route for the restaurant wizard page
  { path: 'about', component: AboutComponent }, // Route for the About page
  { path: 'profile', component: ProfileComponent }, // Route for the About page
  { path: 'uw', component: UserwizardComponent }, // Route for the Restaurant List
  { path: 'r_dash', component: DashboardComponent }, // Route for the restaurant dashboard
  { path: 'r_res_list', component: UserRestaurantListComponent }, // Route for the Restaurant List
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
