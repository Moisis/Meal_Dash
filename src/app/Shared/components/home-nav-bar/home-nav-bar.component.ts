import {Component, inject, OnInit} from '@angular/core';
import { AuthService } from '../../../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrl: './home-nav-bar.component.css'
})
export class HomeNavBarComponent implements  OnInit{

  toastr =  inject(ToastrService);

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
    this.toastr.info("Logged Out.","Bye!")

  }

}
