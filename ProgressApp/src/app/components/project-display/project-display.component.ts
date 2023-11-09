import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewProgress, Progress } from 'src/app/interfaces/progress';
import { Project } from 'src/app/interfaces/project';
import { ProgressApiService } from 'src/app/services/progress-api.service';
import { ProjectService } from 'src/app/services/project.service';
import { Observable, debounce, min, debounceTime, distinctUntilChanged, map, switchMap, tap, filter } from 'rxjs';
import { SkillApiService } from 'src/app/services/skill-api.service';
import { Skill } from 'src/app/interfaces/Skill';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent {
  displayedProject?:Project;
  progress:Progress[] = [];
  commentControl = new FormControl('',Validators.required);
  skillControl = new FormControl('');
  foundSkills:Skill[] = [];
  assignedSkills:Skill[] = [];
  currentTerm:string = '';
  constructor(private projectService: ProjectService, private progresApi:ProgressApiService, private skillsApi:SkillApiService){}

  ngOnInit()
  {
    this.projectService.selectedProject$
      .pipe(
        tap(project => this.displayedProject=project ), 
        switchMap(project=> this.progresApi.getProgress(project.id)))
      .subscribe(progress => this.progress=progress.sort((a,b)=>a.createdAt > b.createdAt ? -1 : 1));

    this.skillControl.valueChanges.pipe( filter(term=> (term ?? '').length > 2 ), debounceTime(300), distinctUntilChanged(), tap(term=> this.currentTerm = term ?? '' ), switchMap(term => this.skillsApi.getAllSkills(term ?? ''))).subscribe(skills=> this.foundSkills = [...skills, {name:this.currentTerm}] );
  }

  onCommitProgress()
  {
    const newProgress: NewProgress = {projectId: this.displayedProject!.id, comment: this.commentControl.value!, skills: this.assignedSkills}
    this.progresApi.addProgress(newProgress).subscribe(progress => this.progress.unshift(progress));

    this.commentControl.reset();
    this.skillControl.reset();
    this.assignedSkills = [];
    this.foundSkills = [];
  }

  onSkillClick(skill:Skill){
    this.assignedSkills.push(skill);
    this.skillControl.reset();
    this.foundSkills = [];
  }
}
