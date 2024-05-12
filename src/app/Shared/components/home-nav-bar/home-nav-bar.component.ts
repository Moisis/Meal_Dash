import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrl: './home-nav-bar.component.css'
})
export class HomeNavBarComponent {


  authService = inject(AuthService)

  ngOnInit() : void {

    this.authService.loggedinUser.subscribe(user => {
      // Someone is logged in
      if (user)
        {
          this.authService.loggedinUserSignal.set(
            {
              displayName: user.displayName!,
              id:user.uid,
            }
          )
        }
        else{
          this.authService.loggedinUserSignal.set(null) // No one is logged in.
        }
        console.log(this.authService.loggedinUserSignal())
  });
}

  logout():void{
    this.authService.logout();
  }
  
}
