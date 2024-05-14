import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { RestaurantFirebaseService } from '../../../restaurantFirebase.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurant-wizard',
  templateUrl: './restaurant-wizard.component.html',
  styleUrl: './restaurant-wizard.component.css'
})
export class RestaurantWizardComponent {

  
  constructor(private _router: Router){}


  RestaurantFirebaseService = inject(RestaurantFirebaseService)
  toastr =  inject(ToastrService);

  fb = inject(FormBuilder)
  

  form = this.fb.nonNullable.group({

    restaurant_Name:['',Validators.required],
    restaurant_Logo: ['',Validators.required],
    restaurant_Tags: ['',Validators.required],
    restaurant_DeliveryFee:['',Validators.required],
    restaurant_DeliveryCities:['',Validators.required],
    restaurant_CookingTime:['',Validators.required],
    restaurant_Description:['',Validators.required],
  })

  onSubmit(): void{

    const rawForm = this.form.getRawValue()

    this.RestaurantFirebaseService.addRestaurant(rawForm.restaurant_Name,
      rawForm.restaurant_Logo,
      rawForm.restaurant_Tags,
      rawForm.restaurant_DeliveryFee,
      rawForm.restaurant_DeliveryCities,
      rawForm.restaurant_CookingTime,
      rawForm.restaurant_Description
    )

    this.toastr.success("Registration Successful.")
    this.toastr.info("Logged In!","Welcome")


    this._router.navigate(['/home'])







   }


}


