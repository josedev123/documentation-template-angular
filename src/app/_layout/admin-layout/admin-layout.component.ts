import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  isLoggedIn = false;
  loggedInUser;

constructor(
  private authService: AuthService, private flashMessage: FlashMessagesService,
  private router: Router
  ) {

  }


  ngOnInit() {


    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

     }

     onLogoutclick() {
      this.authService.logout();
      this.flashMessage.show('You are now logged out', {cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/login']);
    }

}
