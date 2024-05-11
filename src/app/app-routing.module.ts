import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './features/users/user-home/user-home.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent }, // Assuming HomeComponent is your home page
  { path: 'register', component: UserregisterComponent }, // Route for the registration
  { path: 'login', component: UserloginComponent }, // Route for the registration
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
