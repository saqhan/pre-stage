import { Component, OnInit } from '@angular/core';
import {StoreMessagesService} from "../../../../store-messages.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {



  constructor(private storeEvents: StoreMessagesService) { }

  getEvents(){
    return this.storeEvents.getEvents();
  }

  ngOnInit(): void {
  }

}
