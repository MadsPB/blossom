import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewProgress, Progress } from '../interfaces/progress';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressApiService {
  
  baseUrl = 'http://localhost:3001';

  constructor(private http:HttpClient) { }

  getProgress(projectId:number): Observable<Progress[]> {
    return this.http.get<Progress[]>(`${this.baseUrl}/progress/project/${projectId}`).pipe(
      tap(el=>console.log(el))
      );
  }

  addProgress(progress:NewProgress): Observable<Progress> {
    return this.http.post<Progress>(this.baseUrl+'/progress', progress)
    .pipe( tap(el=>console.log(el)) );
  }
}
