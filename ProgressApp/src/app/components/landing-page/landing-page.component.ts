import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  isLoggedIn = false;

  loginFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  
  constructor(private authApi:AuthApiService){}

  ngOnInit()
  {
    //this.authApi.isLoggedIn().subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }

  onSubmit(e:any)
  {
    console.log(e);
    this.authApi.login(this.loginFormGroup.value.username!,this.loginFormGroup.value.password!)
    .subscribe(loggedIn => this.isLoggedIn = loggedIn)
  }

  onLogin()
  {
    this.authApi.login('john','secret').subscribe(loggedIn => console.log("didLogIn "+loggedIn));
  }

  onCheckLogin()
  {
    this.authApi.isLoggedIn().subscribe(loggedIn => console.log("isloggedIn "+loggedIn));
  }

  onLogout()
  {
    this.authApi.logout().subscribe(loggedIn => console.log("isLoggedOut "+loggedIn));
  }
}
