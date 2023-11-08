import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail-picker-item',
  templateUrl: './thumbnail-picker-item.component.html',
  styleUrls: ['./thumbnail-picker-item.component.css']
})
export class ThumbnailPickerItemComponent {
  @Input()
  thumbnail:string = '';
}
