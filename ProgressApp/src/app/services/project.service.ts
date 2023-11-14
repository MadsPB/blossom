import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private selectedProjectSubject:Subject<Project> = new Subject(); 
  selectedProject$:Observable<Project> = this.selectedProjectSubject;

  project?:Project;

  constructor() { }

  selectProject(project:Project)
  {
    this.selectedProjectSubject.next(project);
  }

  setProject(project:Project){
    this.project = project;
  }
}
