import { Component } from '@angular/core';
import { ProjectApiService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  constructor(private projectApi:ProjectApiService){}
  projects:any[] = [
    {
      "id": 1,
      "title": "myTitle1",
      "image_url": "../../../assets/thumbnailExample.png",
      "creatorId": 1,
      "description": "my great project",
      "createdAt": "2023-11-08T19:29:42.766Z",
      "updatedAt": "2023-11-08T19:29:42.766Z"
    },
    {
      "id": 2,
      "title": "myTitle2",
      "image_url": "../../../assets/thumbnailExample.png",
      "creatorId": 1,
      "description": "my great project",
      "createdAt": "2023-11-08T19:30:01.448Z",
      "updatedAt": "2023-11-08T19:30:01.448Z"
    },
    {
      "id": 3,
      "title": "myTitle3",
      "image_url": "../../../assets/thumbnailExample.png",
      "creatorId": 1,
      "description": "my great project",
      "createdAt": "2023-11-08T19:30:04.312Z",
      "updatedAt": "2023-11-08T19:30:04.312Z"
    }
  ];

  ngOnInit(){
    this.projectApi.getProjects().subscribe(projects => this.projects = projects)
  }


}