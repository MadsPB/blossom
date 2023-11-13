import { Component } from '@angular/core';
import { SkillExtended } from 'src/app/interfaces/Skill';
import { SkillApiService } from 'src/app/services/skill-api.service';

@Component({
  selector: 'app-skills-dashboard',
  templateUrl: './skills-dashboard.component.html',
  styleUrls: ['./skills-dashboard.component.css']
})
export class SkillsDashboardComponent {

  skills:SkillExtended[] = [];

  constructor(skillsApi:SkillApiService){
    skillsApi.getUserSkills().subscribe(skills=>this.skills = skills);
  }
}
