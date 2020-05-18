import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  @Input() img: string;
  @Input() category: string;
  @Input() title: string;


  constructor() { }

  ngOnInit(): void {
  }

}
