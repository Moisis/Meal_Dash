import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {

    fb = inject(FormBuilder)

    authService = inject(AuthService)


    form = this.fb.nonNullable.group({

      Email: ['',Validators.required],
      Password:['',Validators.required]
    })

     onSubmit(): void{
      const rawForm = this.form.getRawValue()
      this.authService.login(rawForm.Email,rawForm.Password).subscribe(
        () => console.log('User Logged In Successfully')
      )
     }
    }
