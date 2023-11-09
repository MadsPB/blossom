import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectApiService } from 'src/app/services/project-api.service';
import { Image } from 'src/app/interfaces/image';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  constructor(private projectApi:ProjectApiService, private router: Router) {}

  createProjectForm = new FormGroup({
    titleControl: new FormControl('', Validators.required),
    descriptionControl: new FormControl(''),
  });

  private selectedImage!:Image;

  onSubmit()
  {
    console.log(this.createProjectForm.value);
    const value = this.createProjectForm.value;
    const newProject: Project = {title:value.titleControl!.valueOf(), description: value.descriptionControl!.valueOf(), image_url: this.selectedImage.url};
    this.projectApi.createProject(newProject)
    .subscribe(_=>this.router.navigate(['/projectDashboard']));
    
  }

  onImageSelected(image:Image)
  {
    console.log("here: "+image)
    this.selectedImage = image;
  }
}
