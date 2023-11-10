import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  registerFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private authApi:AuthApiService, private router:Router){}

  onSubmit(e:any){
    this.authApi.register(this.registerFormGroup.value.username!,this.registerFormGroup.value.password!)
    .subscribe(loggedIn => {
      console.log("[register] "+loggedIn)
      loggedIn && this.router.navigate(['/projectDashboard']);
  })
  }
}
