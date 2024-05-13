import { Component, inject,OnInit } from '@angular/core';

import { Firestore, addDoc, collection, doc, getDoc } from "@angular/fire/firestore"
import { AuthService } from '../../../auth.service';
import { Auth,user } from '@angular/fire/auth';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {  


  authService = inject(AuthService)

  displayName:String = ''
  email:String = ''
  userRole: String = ''
  infoTitle:String = ''
  infoLabel:String = ''
  deliveryCity:String = ''


  ngOnInit() : void {

    this.authService.loggedinUser.subscribe(async user => {
      // Someone is logged in
      if (user)
        {
          const userData = await this.authService.getData(user.uid)
          this.displayName = userData!['display_name'];
          this.email = userData!['email']
          
          if(userData!['userType'] == 0) // Customer
          {
            this.userRole = 'Customer'
            this.infoTitle = 'Delivery Address'
            this.infoLabel = userData!['user_address']
            this.deliveryCity = userData!['user_city']

          }
          else
          {
                this.userRole = 'Restaurant Owner'
                this.infoTitle = 'Restaurant Name'
                this.infoLabel = userData!['restaurant_name']
          }
        }
        else{
          this.authService.loggedinUserSignal.set(null) // No one is logged in.
        }
        console.log(this.authService.loggedinUserSignal())
  });
}

}