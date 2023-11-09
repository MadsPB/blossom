import { Component, EventEmitter, Output } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-thumbnail-picker',
  templateUrl: './thumbnail-picker.component.html',
  styleUrls: ['./thumbnail-picker.component.css']
})
export class ThumbnailPickerComponent {
  thumbnailImages = [{id: 1, url:'../../../assets/website.png'},{id: 2, url:'../../../assets/music.jpg'},{id: 3, url:'../../../assets/programming.jpg'},{id: 4, url:'../../../assets/design.jpg'}];
  selectedImage = this.thumbnailImages[0];
  @Output() imageSelected = new EventEmitter<Image>();

  ngOnInit(){
    this.imageSelected.emit(this.selectedImage);
  }
  
  onSelect(image:Image)
  {
    this.selectedImage = image;
    this.imageSelected.emit(this.selectedImage);
  }
}