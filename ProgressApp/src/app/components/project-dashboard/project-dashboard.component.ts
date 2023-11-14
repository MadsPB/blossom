import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { ProjectApiService } from 'src/app/services/project-api.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})

export class ProjectDashboardComponent {
  constructor(private projectApi:ProjectApiService, private projectService:ProjectService, private router:Router){}
  projects:any[] = [];
  selectedProject?:Project;

  ngOnInit(){
    this.projectApi.getProjects().subscribe(projects => {
      this.projects = projects;
      this.selectedProject = projects.find(_=>true);
    });
  }

  onSelect(project:Project){
    this.selectedProject = project;
    this.projectService.setProject(project);
    this.router.navigate(['/project'])
  }
}
