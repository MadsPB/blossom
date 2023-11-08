import { Component } from '@angular/core';

@Component({
  selector: 'app-thumbnail-picker',
  templateUrl: './thumbnail-picker.component.html',
  styleUrls: ['./thumbnail-picker.component.css']
})
export class ThumbnailPickerComponent {
  thumbnailImages = [{id: 1, url:'../../../assets/thumbnailExample.png'},{id: 2, url:'../../../assets/thumbnailExample.png'},{id: 3, url:'../../../assets/thumbnailExample.png'},{id: 4, url:'../../../assets/thumbnailExample.png'}];
  selectedImage = this.thumbnailImages[0];

  onSelect(image:Image)
  {
    this.selectedImage = image;
    console.log(image)
  }
}

type Image = {
  id:number,
  url:string
}
