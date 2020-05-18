import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() img: string;
  @Input() category: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() main: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
