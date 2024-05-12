import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavBarComponent } from './Shared/components/home-nav-bar/home-nav-bar.component';
import { UserHomeComponent } from './features/users/user-home/user-home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { UserHomeMidComponent } from './features/users/user-home-mid/user-home-mid.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantWizardComponent } from './restaurant-wizard/restaurant-wizard.component';



const firebaseConfig = {
  apiKey: "AIzaSyDF0whZg2MCLgnLJ1eTCrqIryGyN9DtKEs",
  authDomain: "meal-dash-baaed.firebaseapp.com",
  projectId: "meal-dash-baaed",
  storageBucket: "meal-dash-baaed.appspot.com",
  messagingSenderId: "18721526332",
  appId: "1:18721526332:web:0857e0aa78d9d5d3dfa939"
};



@NgModule({
  declarations: [
    AppComponent,
    HomeNavBarComponent,
    UserHomeComponent,
    UserHomeMidComponent,
    UserloginComponent,
    UserregisterComponent,
    RestaurantWizardComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [importProvidersFrom([
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()) // For User Authentication Service
  ])],
  bootstrap: [AppComponent]
})
export class AppModule { }
