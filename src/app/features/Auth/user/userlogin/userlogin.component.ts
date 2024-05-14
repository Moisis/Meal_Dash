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

      Email: ['',Validators.required],
      Password:['',Validators.required]
    })

    gotoRegister(){
      this._router.navigate(['/register'])
      
    }

     onSubmit(): void{
      const rawForm = this.form.getRawValue()
      this.authService.login(rawForm.Email,rawForm.Password).subscribe(
        () => {
        this.toastr.info("Logged In!","Welcome")
      this._router.navigate(['/home'])
        
        }
      )
     }
    }
