import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThumbnailPickerComponent } from './components/thumbnail-picker/thumbnail-picker.component';
import { ThumbnailPickerItemComponent } from './components/thumbnail-picker-item/thumbnail-picker-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectDisplayComponent } from './components/project-display/project-display.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DateTransformPipe } from './pipe/date-transform.pipe';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { CredentialsInterceptor } from './interceptor/credentials.interceptor';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { SocialPostComponent } from './components/social-post/social-post.component';
import { SkillsDashboardComponent } from './components/skills-dashboard/skills-dashboard.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { UpperNavBarComponent } from './components/upper-nav-bar/upper-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    NavbarComponent,
    ThumbnailPickerComponent,
    ThumbnailPickerItemComponent,
    ProjectDashboardComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectDisplayComponent,
    ProgressComponent,
    DateTransformPipe,
    LandingPageComponent,
    AboutComponent,
    RegisterUserComponent,
    HomeComponent,
    LoginComponent,
    FileuploadComponent,
    NewsFeedComponent,
    SocialPostComponent,
    SkillsDashboardComponent,
    DiscoverComponent,
    UpperNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
