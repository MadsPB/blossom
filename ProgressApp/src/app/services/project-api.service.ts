import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { NewProject, Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  baseUrl = 'http://localhost:3001';

  constructor(private http:HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl+'/projects').pipe(
      tap(el=>console.log(el))
      );
  }

  createProject(project:NewProject): Observable<Project> {
    return this.http.post<Project>(this.baseUrl+'/projects', project);
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl+'/projectsAll').pipe(tap(el=>console.log(el)));
  }
}
