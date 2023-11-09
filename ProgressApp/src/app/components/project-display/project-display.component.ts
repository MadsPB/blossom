import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewProgress, Progress } from 'src/app/interfaces/progress';
import { Project } from 'src/app/interfaces/project';
import { ProgressApiService } from 'src/app/services/progress-api.service';
import { ProjectService } from 'src/app/services/project.service';
import { Observable, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent {
  displayedProject?:Project;
  progress:Progress[] = [];
  commentControl = new FormControl('',Validators.required);

  constructor(private projectService: ProjectService, private progresApi:ProgressApiService){}

  ngOnInit()
  {
    this.projectService.selectedProject$
      .pipe(
        tap(project => this.displayedProject=project ), 
        switchMap(project=> this.progresApi.getProgress(project.id)))
      .subscribe(progress => this.progress=progress.sort((a,b)=>a.createdAt > b.createdAt ? -1 : 1));
  }

  onCommitProgress()
  {
    const newProgress: NewProgress = {projectId: this.displayedProject!.id, comment: this.commentControl.value!, skills: [{name:"cSharp"},{name:"postgres"}]}
    this.progresApi.addProgress(newProgress).subscribe(progress => this.progress.unshift(progress));
  }
}
