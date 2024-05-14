import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp({"projectId":"meal-dash-baaed","appId":"1:18721526332:web:0857e0aa78d9d5d3dfa939","databaseURL":"https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"meal-dash-baaed.appspot.com","apiKey":"AIzaSyDF0whZg2MCLgnLJ1eTCrqIryGyN9DtKEs","authDomain":"meal-dash-baaed.firebaseapp.com","messagingSenderId":"18721526332"})),
    provideDatabase(() => getDatabase()),
    FormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
