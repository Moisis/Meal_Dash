import { Component, inject,OnInit } from '@angular/core';

import { Firestore, addDoc, collection, doc, getDoc } from "@angular/fire/firestore"
import { AuthService } from '../auth.service';
import { Auth,user } from '@angular/fire/auth';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {  


  authService = inject(AuthService)

  displayName = 'soaad'

  ngOnInit() : void {

    this.authService.loggedinUser.subscribe(user => {
      // Someone is logged in
      if (user)
        {
          const userData = this.authService.getData(user.uid)
        }
        else{
          this.authService.loggedinUserSignal.set(null) // No one is logged in.
        }
        console.log(this.authService.loggedinUserSignal())
  });
}

}