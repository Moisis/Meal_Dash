import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-user-home-mid',
  templateUrl: './user-home-mid.component.html',
  styleUrl: './user-home-mid.component.css'
})
export class UserHomeMidComponent {

  
   authService = inject(AuthService)

}
