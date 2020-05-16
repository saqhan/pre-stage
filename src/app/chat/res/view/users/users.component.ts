import { Component, OnInit } from '@angular/core';
import {StoreMessagesService} from "../../../../store-messages.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private messageServis: StoreMessagesService) { }

  messages = this.messageServis.messages;

  isShowChat() {
    return this.messageServis.showChat;
  }

  isShowPersonal() {
    return this.messageServis.showPersonal;
  }

  togglePersonal() {
    return this.messageServis.togglePersonal();
  }

  toggleShowChat() {
    return this.messageServis.toggleShowChat();
  }
  closeChat() {
    return this.messageServis.closeChat();
  }

  ngOnInit(): void {
  }

}
