import { Injectable } from '@angular/core';
import { Skill, SkillExtended } from '../interfaces/Skill';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillApiService {

  baseUrl = 'http://localhost:3001';

  constructor(private http:HttpClient) { }

  getAllSkills(term:string):Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl+'/skills/name/'+term)
  }

  getUserSkills():Observable<SkillExtended[]> {
    return this.http.get<SkillExtended[]>(this.baseUrl+'/skills/user').pipe(tap(el=> console.log(el)))
  }
}
