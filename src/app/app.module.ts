import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavBarComponent } from './Shared/components/home-nav-bar/home-nav-bar.component';
import { UserHomeComponent } from './features/users/user-home/user-home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { UserHomeMidComponent } from './features/users/user-home-mid/user-home-mid.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeNavBarComponent,
    UserHomeComponent,
    UserHomeMidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"meal-dash-baaed","appId":"1:18721526332:web:0857e0aa78d9d5d3dfa939","storageBucket":"meal-dash-baaed.appspot.com","apiKey":"AIzaSyDF0whZg2MCLgnLJ1eTCrqIryGyN9DtKEs","authDomain":"meal-dash-baaed.firebaseapp.com","messagingSenderId":"18721526332"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
