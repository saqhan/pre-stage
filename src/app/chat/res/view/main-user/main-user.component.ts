import { Component, OnInit } from '@angular/core';
import { StoreMessagesService} from "../../../../store-messages.service";
import {ChatComponent} from "../../../chat.component";

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {

  constructor(
    private messageServis: StoreMessagesService
  ) { }

  messages = this.messageServis.messages;

  togglePersonal() {
    return this.messageServis.togglePersonal();
  }

  ngOnInit(): void {
  }

}
