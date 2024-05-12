import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './features/users/user-home/user-home.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RestaurantWizardComponent } from './restaurant-wizard/restaurant-wizard.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent }, // Home page
  { path: 'register', component: UserregisterComponent }, // Route for the Registration page
  { path: 'login', component: UserloginComponent }, // Route for the login page
  { path: 'rw', component: RestaurantWizardComponent }, // Route for the restaurant wizard page
  { path: 'about', component: AboutComponent }, // Route for the About page
  { path: 'profile', component: ProfileComponent }, // Route for the About page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
