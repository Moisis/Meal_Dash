import { Component, inject,OnInit } from '@angular/core';

import { Firestore, addDoc, collection, doc, getDoc } from "@angular/fire/firestore"
import { AuthService } from '../../../auth.service';
import { Auth,user } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {  

  constructor(private httpClient: HttpClient){}

  firebaseAuth = inject(Auth)

  authService = inject(AuthService)

  userData: any = {}
  restaurantData: any = {}

  displayName:String = ''
  email:String = ''
  registrationDate:String = ''
  userRole: String = ''
  infoTitle:String = ''
  infoLabel:String = ''
  deliveryCity:String = ''

  ngOnInit() : void {


    
    this.authService.loggedinUser.subscribe( async user => {
      // Someone is logged in
      if (user)
        {
          const userURL = `https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Users/${this.firebaseAuth.currentUser?.uid}.json`
          await this.httpClient.get(userURL).subscribe(async responseData =>
            {
               this.userData = responseData 

               // Set Data 
              this.displayName = this.userData!.display_name
              this.email = this.userData!['email']
              this.registrationDate = this.userData!['registrationDate']

                    
                    if(this.userData!['userType'] == 0) // Customer
                    {
                      this.userRole = 'Customer'
                      this.infoTitle = 'Delivery Address'
                      this.infoLabel = this.userData!['user_address']
                      this.deliveryCity = this.userData!['user_city']

                    }
                    else
                    {
                          this.userRole = 'Restaurant Owner'
                          this.infoTitle = 'Restaurant Name'
                          const restaurantsURL = `https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Restaurants/${this.firebaseAuth.currentUser?.uid}.json`
                          await this.httpClient.get(restaurantsURL).subscribe(responseData => {
                            this.restaurantData = responseData
                            this.infoLabel = this.restaurantData!['restaurant_Name']
                            this.deliveryCity = this.restaurantData!['delivery_Cities']
                          })
                          

                          
                    }


          })
        }
        else{
          this.authService.loggedinUserSignal.set(null) // No one is logged in.
        }
  });
  


}

}
