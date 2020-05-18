import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() img: string;
  @Input() date: string;
  @Input() category: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
