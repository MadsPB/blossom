import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private selectedProjectSubject:Subject<Project> = new Subject(); 
  selectedProject$:Observable<Project> = this.selectedProjectSubject;

  constructor() { }

  selectProject(project:Project)
  {
    this.selectedProjectSubject.next(project);
  }
}
