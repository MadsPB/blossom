import { Component } from '@angular/core';
import { SocialPost } from 'src/app/interfaces/SocialPost';
import { SocialApiService } from 'src/app/services/social-api.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent {

  socialposts:SocialPost[] = [];

  constructor(private socialApi:SocialApiService){}

  ngOnInit()
  {
    this.socialApi.getPosts().subscribe(posts => this.socialposts = posts);
  }
}
