import { Component, OnInit } from '@angular/core';
import { StoreMessagesService } from '../../../../store-messages.service';

@Component({
  selector: 'app-first-slider',
  templateUrl: './first-slider.component.html',
  styleUrls: ['./first-slider.component.css'],
})
export class FirstSliderComponent implements OnInit {
  constructor(private storeBlog: StoreMessagesService) {}

  getBlog() {
    return this.storeBlog.getBlog();
  }

  ngOnInit(): void {}
}
