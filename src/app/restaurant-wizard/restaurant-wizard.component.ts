import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RestaurantFirebaseService } from '../restaurantFirebase.service';

@Component({
  selector: 'app-restaurant-wizard',
  templateUrl: './restaurant-wizard.component.html',
  styleUrl: './restaurant-wizard.component.css'
})
export class RestaurantWizardComponent {

  
  RestaurantFirebaseService = inject(RestaurantFirebaseService)
  //authService = inject(AuthService)

  fb = inject(FormBuilder)
  
  form = this.fb.nonNullable.group({

    restaurant_Name:['',Validators.required],
    restaurant_Logo: ['',Validators.required],
    restaurant_Tags: ['',Validators.required],
    restaurant_DeliveryFee:['',Validators.required],
    restaurant_DeliveryCities:['',Validators.required],
    restaurant_CookingTime:['',Validators.required]
  })
  
  onSubmit(): void{

    const rawForm = this.form.getRawValue()
    
    this.RestaurantFirebaseService.addRestaurant(rawForm.restaurant_Name,
      rawForm.restaurant_Logo,
      rawForm.restaurant_Tags,
      rawForm.restaurant_DeliveryFee,
      rawForm.restaurant_DeliveryCities
      ,rawForm.restaurant_CookingTime,
    )

    console.log('Restaurant should be added now.')


   }


}


