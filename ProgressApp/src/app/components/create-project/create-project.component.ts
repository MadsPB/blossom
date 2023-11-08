import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {

  createProjectForm = new FormGroup({
    titleControl: new FormControl('', Validators.required),
    descriptionControl: new FormControl(''),
  });

  onSubmit()
  {
    console.log(this.createProjectForm.value);
  }
}
