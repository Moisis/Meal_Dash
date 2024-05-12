import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrl: './userregister.component.css'
})
export class UserregisterComponent {



  authService = inject(AuthService)

  fb = inject(FormBuilder)
  
  form = this.fb.nonNullable.group({

    displayName:['',Validators.required],
    Email: ['',Validators.required],
    Password:['',Validators.required],
    userType:['',Validators.required]
  })
  
  onSubmit(): void{

    const rawForm = this.form.getRawValue()
    this.authService.register(rawForm.Email,rawForm.displayName,rawForm.Password,Number(rawForm.userType)).subscribe(
      () => console.log('User Registered Successfully')
    )
   }


}

