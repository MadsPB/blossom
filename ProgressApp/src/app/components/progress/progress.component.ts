import { Component, Input } from '@angular/core';
import { Progress } from 'src/app/interfaces/progress';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input()
  progress?: Progress;
}
