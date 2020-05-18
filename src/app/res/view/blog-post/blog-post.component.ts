import { Component, OnInit } from '@angular/core';
import { StoreMessagesService } from '../../../store-messages.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  constructor(private storeBlog: StoreMessagesService) {}

  getBlogPost() {
    return this.storeBlog.getBlogPost();
  }

  ngOnInit(): void {}
}
