import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {

  uploadFormGroup = new FormGroup({
    imageControl: new FormControl('', Validators.required),
  });

  selectedFile!:File;
  imageUrl:string = '';
  @Output() onImageUploaded = new EventEmitter<string>();

  constructor(private httpclient:HttpClient){}
  
  uploadFile(event: any) {
    const file = event.target.files ? event.target.files[0] : null;
    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = e => this.imageUrl = reader.result as string;
    reader.readAsDataURL(file);
  }

  onSubmit(e:any){
    const formData = new FormData();

    formData.append('image', this.selectedFile)

    this.httpclient.post<any>('http://localhost:3002/image',formData).subscribe(response=>
    {
      console.log(response.url); 
      this.imageUrl = 'http://localhost:8081/files/'+response.url
      this.onImageUploaded.emit(this.imageUrl);
    })
  }
}
