import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrl: './userregister.component.css'
})
export class UserregisterComponent {

  constructor(private _router: Router,private httpClient: HttpClient){}

   toastr =  inject(ToastrService);
   authService = inject(AuthService);



  fb = inject(FormBuilder)

  form = this.fb.nonNullable.group({

    displayName:[null,Validators.required],
    Email: [null,Validators.required],
    Password:[null,Validators.required],
    userType:[null,Validators.required]
  })

  fullUrl = "https://meal-dash-baaed-default-rtdb.europe-west1.firebasedatabase.app/Users/userID.json"

  onSubmit(): void{

    const rawForm = this.form.getRawValue()
    if(rawForm.Email == null || rawForm.Password == null || rawForm.userType == null || rawForm.displayName == null)
      {
        this.toastr.error("Please fill out all the required fields.")
        return
      }
      else{


      this.authService.register(rawForm.Email!,rawForm.Password!,Number(rawForm.userType),rawForm.displayName!).subscribe(
          () => {
            console.log('Registartion Part 1 -- Successfull')
            this._router.navigate(['/uw'])
            
          },
          (error) => {
            if(error.code == 'auth/invalid-email' )
            this.toastr.warning('Please enter a valid E-mail address')
          else if (error.code == 'auth/weak-password')
            this.toastr.warning('Please enter a minimum of 6 characters for your password')
          else if (error.code == 'auth/email-already-in-use')
            this.toastr.warning('Email Already Registered.')
          }
        )
      }
    
     }
  }

