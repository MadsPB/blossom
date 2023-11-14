import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectApiService } from 'src/app/services/project-api.service';
import { Image } from 'src/app/interfaces/image';
import { Router } from '@angular/router';
import { NewProject, Project } from 'src/app/interfaces/project';
import { ThumbnailPickerComponent } from '../thumbnail-picker/thumbnail-picker.component';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  constructor(private projectApi:ProjectApiService, private router: Router, private httpclient:HttpClient) {}

  private dummyImages:Image[] = [{url:'../../../assets/website.png'},{url:'../../../assets/music.jpg'},{ url:'../../../assets/programming.jpg'},{ url:'../../../assets/design.jpg'}];
  
  imageSelection = this.dummyImages;

  createProjectForm = new FormGroup({
    titleControl: new FormControl('', Validators.required),
    descriptionControl: new FormControl(''),
  });

  private selectedImage!:Image;
  private uploadedImage?:Image;
  private selectedFile?:File;

  onSubmit()
  {
    const value = this.createProjectForm.value;
    
    
    if(this.selectedFile)
    {
      const formData = new FormData();
      formData.append('image', this.selectedFile)

      this.httpclient.post<any>('http://localhost:3002/image',formData).pipe(
        map(response=> (
          {
            title:value.titleControl!.valueOf(), 
            description: value.descriptionControl!.valueOf(), 
            image_url: 'http://localhost:8081/files/'+response.url
          })),
          switchMap(project=>  this.projectApi.createProject(project))
        )
        .subscribe(_=>this.router.navigate(['/projectDashboard']));
    } else {
      const newProject: NewProject = {title:value.titleControl!.valueOf(), description: value.descriptionControl!.valueOf(), image_url: this.uploadedImage?.url ?? this.selectedImage.url};

      this.projectApi.createProject(newProject)
      .subscribe(_=>this.router.navigate(['/projectDashboard']));
    }
  }

  onImageSelected(image:Image)
  {
    console.log("here: "+image)
    this.selectedImage = image;
  }

  handleImageUploaded(url:string)
  {
    this.uploadedImage = {url: url};
  }

  onImageRead(data:any){
    this.imageSelection = [{url:data.imageUrl}, ...this.dummyImages];
    this.selectedFile = data.file;
  }
}
