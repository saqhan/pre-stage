import { Component, OnInit } from '@angular/core';
import { StoreMessagesService } from '../store-messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  constructor(private messageServis: StoreMessagesService) {}

  messages = this.messageServis.messages;

  isShowChat() {
    return this.messageServis.showChat;
  }

  isShowPersonal() {
    return this.messageServis.showPersonal;
  }

  toggleUsers() {
    return this.messageServis.toggleUsers();
  }

  toggleShowChat() {
    return this.messageServis.toggleShowChat();
  }

  closeChat() {
    return this.messageServis.closeChat();
  }
  toggleFiles(){
    return this.messageServis.toggleFiles()
  }
  ngOnInit(): void {}
}
