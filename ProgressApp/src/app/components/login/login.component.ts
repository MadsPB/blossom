import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStatus } from 'src/app/interfaces/LoginStatus';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authApi:AuthApiService, private router:Router){}

  loginFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  onSubmit(e:any)
  {
    console.log(e);
    this.authApi.login(this.loginFormGroup.value.username!,this.loginFormGroup.value.password!)
    .subscribe(loginStatus => {
      if(loginStatus === LoginStatus.Success)
        this.router.navigate(['home'])

      if(loginStatus === LoginStatus.UserNameOrPasswordIncorrect)
      {
        // show user they should pick another username
      }
    } )
  }
}
