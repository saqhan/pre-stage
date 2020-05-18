import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenta',
  templateUrl: './lenta.component.html',
  styleUrls: ['./lenta.component.css']
})
export class LentaComponent implements OnInit {
  @Input() img: string;
  @Input() category: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() lenta: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
