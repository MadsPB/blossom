import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Progress } from 'src/app/interfaces/progress';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent {
  displayedProject?:Project;
  progress?:Progress[];
  commentControl = new FormControl('',Validators.required);

  constructor(private projectService: ProjectService){}

  ngOnInit()
  {
    this.progress = [{comment: "I made cool progress on this project.", createdAt: new Date()},{comment: "I made cool progress on this project.", createdAt: new Date()},{comment: "I made cool progress on this project.", createdAt: new Date()}];
    this.projectService.selectedProject$.subscribe(project => this.displayedProject=project);
  }

  onCommitProgress()
  {
    
  }
}
