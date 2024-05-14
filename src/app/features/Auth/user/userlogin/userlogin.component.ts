import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {

  constructor(private _router: Router){}


    toastr =  inject(ToastrService);
    fb = inject(FormBuilder)

    authService = inject(AuthService)


    form = this.fb.nonNullable.group({

      Email: [null,Validators.required],
      Password:[null,Validators.required]
    })

    gotoRegister(){
      this._router.navigate(['/register'])
      
    }

     onSubmit(): void{

      const rawForm = this.form.getRawValue()
      if(rawForm.Email == null || rawForm.Password == null)
        {
          this.toastr.error("Please fill out all the required fields.")
          return
        }

      this.authService.login(rawForm.Email,rawForm.Password).subscribe(
        () => {
        this.toastr.info("Logged In!","Welcome")
      this._router.navigate(['/home'])
        
        },
        (error) => {
          if(error.code == 'auth/invalid-email' )
            this.toastr.warning('Please enter a valid E-mail address')
          if(error.code =='auth/invalid-credential')
            this.toastr.warning('Incorrect Credentials Entered')


          // You could display a generic error message or provide more specific feedback based on the error code
        }
      )
     }
    }
