import { Component, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase, ref, push,set,get, } from 'firebase/database';
import {CategoryComponent} from '../../../category/category.component';
import { Inject } from '@angular/core';
import { Auth,user } from '@angular/fire/auth';
import { CategoryItemService } from '../../../categoryitemservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { RestaurantFirebaseService } from '../../../restaurantFirebase.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-wizard2',
  templateUrl: './restaurant-wizard2.component.html',
  styleUrls: ['./restaurant-wizard2.component.css']
})
export class RestaurantWizard2Component {
  

  constructor(private _router: Router,private httpClient: HttpClient){} 


  firebaseAuth = inject(Auth)

  toastr =  inject(ToastrService);

  fb = inject(FormBuilder)
  

  form = this.fb.nonNullable.group({

    item_Name:['',Validators.required],
    item_Price: ['',Validators.required],
    item_Description: ['',Validators.required],
    item_Tags:['',Validators.required],

  })


  async addItem():Promise<void>{
    const rawForm = this.form.getRawValue()

    const fullUrl = `https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Menus/${this.firebaseAuth.currentUser?.uid}.json`


    await this.httpClient.post(fullUrl,rawForm).subscribe(responseData => {
    this.toastr.success("Item Added Successfully.")
    })
  }

  async onSubmit(): Promise<void>{

   

    this.toastr.success("Registration Successful.")
    this.toastr.info("Logged In!","Welcome")

    this._router.navigate(['/home'])



  }
  
}