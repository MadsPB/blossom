import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/Skill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillApiService {

  baseUrl = 'http://localhost:3001';

  constructor(private http:HttpClient) { }

  getAllSkills(term:string):Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl+'/skills/'+term)
  }
}
