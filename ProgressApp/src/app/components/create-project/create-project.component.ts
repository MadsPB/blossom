import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectApiService } from 'src/app/services/project-api.service';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  constructor(private projectApi:ProjectApiService) {}

  createProjectForm = new FormGroup({
    titleControl: new FormControl('', Validators.required),
    descriptionControl: new FormControl(''),
  });

  private selectedImage!:Image;

  onSubmit()
  {
    console.log(this.createProjectForm.value);
    const value = this.createProjectForm.value;
    this.projectApi.createProject({title:value.titleControl!.valueOf(), description: value.descriptionControl!.valueOf(), image_url: this.selectedImage.url}).subscribe();
  }

  onImageSelected(image:Image)
  {
    console.log("here: "+image)
    this.selectedImage = image;
  }
}
