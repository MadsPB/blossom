import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-upper-nav-bar',
  templateUrl: './upper-nav-bar.component.html',
  styleUrls: ['./upper-nav-bar.component.css']
})

export class UpperNavBarComponent {
  title = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit()
  {
    this.route.data.subscribe(data => 
      this.title = data['title'])
  }
}
