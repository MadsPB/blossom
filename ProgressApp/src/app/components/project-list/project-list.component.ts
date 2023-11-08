import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

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

 

}

type Project = {
  title:string,
  image_url:string,
  description:string,
}