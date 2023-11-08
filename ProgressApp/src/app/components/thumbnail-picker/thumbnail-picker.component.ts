import { Component, EventEmitter, Output } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-thumbnail-picker',
  templateUrl: './thumbnail-picker.component.html',
  styleUrls: ['./thumbnail-picker.component.css']
})
export class ThumbnailPickerComponent {
  thumbnailImages = [{id: 1, url:'../../../assets/thumbnailExample.png'},{id: 2, url:'../../../assets/thumbnailExample.png'},{id: 3, url:'../../../assets/thumbnailExample.png'},{id: 4, url:'../../../assets/thumbnailExample.png'}];
  selectedImage = this.thumbnailImages[0];
  @Output() imageSelected = new EventEmitter<Image>();

  onSelect(image:Image)
  {
    this.selectedImage = image;
    this.imageSelected.emit(this.selectedImage);
  }
}