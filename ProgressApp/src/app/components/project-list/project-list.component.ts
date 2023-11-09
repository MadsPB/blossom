import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectApiService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  constructor(private projectApi:ProjectApiService){}
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
  }


}