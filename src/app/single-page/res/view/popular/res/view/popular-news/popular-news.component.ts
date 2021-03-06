import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popular-news',
  templateUrl: './popular-news.component.html',
  styleUrls: ['./popular-news.component.css']
})
export class PopularNewsComponent implements OnInit {

  @Input() img:string;
  @Input() title:string;
  @Input() category:string;


  constructor() { }

  ngOnInit(): void {
  }

}
