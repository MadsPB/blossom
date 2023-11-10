import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  baseUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  isLoggedIn():Observable<boolean> {
    return this.http.get(this.baseUrl+'/auth',{
      withCredentials: true
  }).pipe(
      tap((el:any) => {
        console.log("[isLoggedIn] " +el)
      }),
      catchError((e: HttpErrorResponse) => {
        if(e.status === 401)
          return of({userId:-1});
        
        console.log("[isLoggedInError] "+e)
        throw e;
      }),
      map<User,boolean>(user=> {
        return (user.userId > 0)
      }
      )
      );
  }

  login(username:string, password:string):Observable<boolean> {
    return this.http.post(this.baseUrl+'/login',{username,password},{responseType: 'text'}).pipe(
      catchError((e: HttpErrorResponse) => {
        if(e.status === 401)
          return of('');
        
        throw e;
      }),
      tap(el=>console.log(el)),
      map<string,boolean>(user=> user.length>0));
  }
  logout():Observable<boolean> {
    return this.http.post(this.baseUrl+'/logout',{},{responseType: 'text'}).pipe(
      catchError((e: HttpErrorResponse) => {
        if(e.status === 401)
          return of('');
        
        throw e;
      }),
      tap(el=>console.log(el)),
      map<string,boolean>(user=> user.length>0));
  }

  register(username:string, password:string):Observable<boolean> {
    return this.http.post(this.baseUrl+'/register',{username,password},{responseType: 'text'}).pipe(
      catchError((e: HttpErrorResponse) => {
        if(e.status === 401)
          return of('');
        
        throw e;
      }),
      tap(el=>console.log(el)),
      map<string,boolean>(user=> user.length>0));
  }
  


}

type User = {
  userId:number
}
