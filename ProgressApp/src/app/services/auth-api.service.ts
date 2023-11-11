import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { Auth } from '../interfaces/Auth';
import { RegisterStatus } from '../interfaces/RegisterStatus';
import { LoginStatus } from '../interfaces/LoginStatus';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private baseUrl = 'http://localhost:3000';

  isLoggedIn = false;

  constructor(private http:HttpClient) { }

  updateLoggedInStatus():Observable<boolean> {
    return this.http.get<Auth>(this.baseUrl+'/auth',{
      withCredentials: true
  }).pipe(
      map<Auth,boolean>(auth=> {
        return auth.authorized 
      }),
      catchError((e,o)=>{
        if(e.status === 401)
          return of(false)
        
        console.log("[isLoggedInError] "+e)
        throw e;
      }),
      tap(el=> this.isLoggedIn = el)
      );
  }

  login(username:string, password:string):Observable<LoginStatus> {
    return this.http.post(this.baseUrl+'/login',{username,password},{responseType: 'text'}).pipe(
      tap(el=>console.log(el)),
      map<any,LoginStatus>(_=> LoginStatus.Success),
      catchError((e: HttpErrorResponse) => {
        if(e.status === 401)
          return of(LoginStatus.UserNameOrPasswordIncorrect);
        
        throw e;
      }),
      tap(el => this.isLoggedIn = el === LoginStatus.Success)
      );
  }
  
  logout():Observable<void> {
    return this.http.post(this.baseUrl+'/logout',{},{responseType: 'text'})
                    .pipe(
                      tap(el=>console.log(el)),
                      map(el => undefined)
                      );
  }

  register(username:string, password:string):Observable<RegisterStatus> {
    return this.http.post(this.baseUrl+'/register',{username,password},{responseType: 'text'}).pipe(
      map<any,RegisterStatus>(_=> RegisterStatus.Success),
      catchError((e: HttpErrorResponse) => {
        if(e.status === 409)
          return of(RegisterStatus.UserAlreadyExists);
        
        throw e;
      }),
      tap(el => this.isLoggedIn = el === RegisterStatus.Success)
      );
  } 
}
