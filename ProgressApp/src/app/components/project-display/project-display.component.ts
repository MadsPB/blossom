import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent {
  displayedProject?:Project;

  constructor(private projectService: ProjectService){}

  ngOnInit()
  {
    this.projectService.selectedProject$.subscribe(project => this.displayedProject=project);
  }
}
