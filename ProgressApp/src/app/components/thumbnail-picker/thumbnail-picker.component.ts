import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-thumbnail-picker',
  templateUrl: './thumbnail-picker.component.html',
  styleUrls: ['./thumbnail-picker.component.css']
})
export class ThumbnailPickerComponent {
  @Input() thumbnailImages:Image[] = []
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