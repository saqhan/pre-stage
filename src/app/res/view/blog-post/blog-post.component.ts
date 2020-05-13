import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  blog = [
    {id: 1, title: 'How to quickly turn your podcast into a video script', img: 'assets/img/img7.jpg', category: 'Blog Post'},
    {id: 2, title: 'How to quickly turn your podcast into a video script', img: 'assets/img/img8.jpg', category: 'Blog Post'},
    {id: 3, title: 'How to quickly turn your podcast into a video script', img: 'assets/img/img9.jpg', category: 'Blog Post'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
