import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { authGuard } from './guards/auth.guard';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'about', component: AboutComponent},
  {path:'createProject', canActivate: [authGuard], component: CreateProjectComponent},
  {path:'projectDashboard', component: ProjectDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
