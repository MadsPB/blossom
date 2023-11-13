import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
import { SocialPost } from 'src/app/interfaces/SocialPost';


@Injectable({
  providedIn: 'root'
})
export class SocialApiService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<SocialPost[]>{
    return this.http.get<SocialPost[]>('http://localhost:3004/feed').pipe(tap(el=> console.log(el)))
  }
}
