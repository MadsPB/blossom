import { Component, Input } from '@angular/core';
import { SocialPost } from 'src/app/interfaces/SocialPost';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css']
})
export class SocialPostComponent {
  @Input() 
  post?:SocialPost;
}
