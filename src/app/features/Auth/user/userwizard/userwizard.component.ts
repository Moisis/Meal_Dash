import { Component, inject } from '@angular/core';
import { Auth, user } from "@angular/fire/auth"
import { ToastrService } from 'ngx-toastr';
import { DocumentData, Firestore, addDoc, collection, doc, getDoc, setDoc, updateDoc } from "@angular/fire/firestore"
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userwizard',
  templateUrl: './userwizard.component.html',
  styleUrl: './userwizard.component.css'
})
export class UserwizardComponent {

  constructor(private _router: Router,private httpClient: HttpClient){}

  firebaseAuth = inject(Auth)
  firestore = inject(Firestore)
  usersCollection = collection(this.firestore,'Users')
  loggedinUser = user(this.firebaseAuth) // Null if user is not logged in - Logged In : User Data
  toastr =  inject(ToastrService);




  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group({

    user_number:['',Validators.required],
    user_city:['',Validators.required],
    user_address:['',Validators.required]
  })

  async onSubmit(): Promise<void>{

    const rawForm = this.form.getRawValue()

    const fullUrl = `https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Users/${this.firebaseAuth.currentUser?.uid}.json`


    this.httpClient.patch(fullUrl,rawForm).subscribe(responseData => {
       console.log('DATA ADDED')
    })
    {
      console.log('Data added successfully!');
      this.toastr.success("Registration Successful.")
      this.toastr.show('Logged In!')

      this._router.navigate(['/home'])

  }



   }


}

