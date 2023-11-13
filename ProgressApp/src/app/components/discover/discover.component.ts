import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectApiService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {

  left!:Project;
  middle!:Project;
  right!:Project;
  projects:Project[] = [];
  nextProject:number = 0;

  constructor(private projectApi:ProjectApiService){}

  ngOnInit()
  {
    this.projectApi.getAllProjects().subscribe(projects=>this.handleProjects(projects))
  }

  handleProjects(projects:Project[]){
    this.nextProject = 0;
    console.log('here '+projects);
    console.log('here '+this.nextProject);
    console.log('here '+projects[this.nextProject].image_url)
    this.projects = projects;
    this.middle = projects[this.nextProject++];
    this.right = projects[this.nextProject++];
    console.log("after: " + this.nextProject)
  }

  onNextProject(){
    console.log("lef: " + this.middle.id)
    console.log("middle: " + this.right.id)

    this.left=this.middle;
    this.middle=this.right;
    if( this.nextProject >=  this.projects.length)
      this.nextProject = 0;

    console.log(this.nextProject)
    this.right = this.projects[this.nextProject++]
    console.log("right: " + this.right.id)

  }
}
