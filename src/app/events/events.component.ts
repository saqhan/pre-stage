import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [
    {id: 1, title: 'The Basic: Structuring Your Video Marketing Strategy', category: 'Webinar', img: 'assets/img/img13.jpg', date: '24 Jun'},
    {id: 2, title: 'How to quickly turn your podcast into a video script', category: 'Webinar', img: 'assets/img/img14.jpg', date: ''},
    {id: 3, title: 'The Basic: Structuring Your Video Marketing Strategy', category: 'Webinar', img: 'assets/img/img15.jpg', date: '24 Jun'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
