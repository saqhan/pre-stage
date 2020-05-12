import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popularNews = [
    {id: 1, title: 'Webinar: Improving content marketing through visual storytelling', category: 'Blog Post', img:'assets/img/img1_thumb.jpg' },
    {id: 2, title: 'Explore instagram Video: How to convert, engagem and get more Insta...', category: 'Webinar', img:'assets/img/img2_thumb.jpg' },
    {id: 3, title: 'Micro-Influencers and B2C cool brand videos: A match a have video', category: 'Report', img:'assets/img/img12_thumb.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
