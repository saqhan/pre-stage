import { Component, OnInit } from '@angular/core';
import { StoreMessagesService } from '../../../../store-messages.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  constructor(private storePopular: StoreMessagesService) {}

  getPopularNews() {
    return this.storePopular.getPopularNews();
  }

  ngOnInit(): void {}
}
