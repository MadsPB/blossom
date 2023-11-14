import { Component } from '@angular/core';
import { ProgressExt, SkillExtended } from 'src/app/interfaces/Skill';
import { SkillApiService } from 'src/app/services/skill-api.service';

@Component({
  selector: 'app-skills-dashboard',
  templateUrl: './skills-dashboard.component.html',
  styleUrls: ['./skills-dashboard.component.css']
})
export class SkillsDashboardComponent {

  skills:SkillExtended[] = [];
  selectedSkill?:SkillExtended;
  progress:ProgressExt[] = [];

  constructor(skillsApi:SkillApiService){
    skillsApi.getUserSkills().subscribe(skills=>this.skills = skills);
  }

  onSkillSelect(skill:SkillExtended){
    this.selectedSkill = skill;
    this.progress = skill.Progresses;
  }
}
