import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavBarComponent } from './Shared/components/home-nav-bar/home-nav-bar.component';
import { UserHomeComponent } from './features/users/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavBarComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
