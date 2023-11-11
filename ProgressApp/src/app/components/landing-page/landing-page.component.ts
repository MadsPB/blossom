import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginStatus } from 'src/app/interfaces/LoginStatus';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  ngOnInit()
  {
    //this.authApi.isLoggedIn().subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }

  constructor(private authApi:AuthApiService){}

  onLogin()
  {
    this.authApi.login('john','secret').subscribe(loggedIn => console.log("didLogIn "+loggedIn));
  }

  onCheckLogin()
  {
    this.authApi.updateLoggedInStatus().subscribe(loggedIn => console.log("isloggedIn "+loggedIn));
  }

  onLogout()
  {
    this.authApi.logout().subscribe(loggedIn => console.log("isLoggedOut "+loggedIn));
  }
}
