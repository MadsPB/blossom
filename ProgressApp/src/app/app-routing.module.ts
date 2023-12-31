import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { authGuard } from './guards/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { SkillsDashboardComponent } from './components/skills-dashboard/skills-dashboard.component';
import { ProjectDisplayComponent } from './components/project-display/project-display.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {
    path: '', canActivate: [authGuard], children: [
      {path:'createProject', component: CreateProjectComponent, data:{title:"Create"}},
      {path:'projectDashboard', component: ProjectDashboardComponent, data:{title:"Projects"}},
      {path:'skillsDashboard', component: SkillsDashboardComponent, data:{title:"Skills"}},
      {path:'discover', component: DiscoverComponent, data:{title:"Discover"}},
      {path:'project', component: ProjectDisplayComponent, data:{title:"Project"}},
    ]
  },
  {path:'home', component: HomeComponent },
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'join', component: RegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
