import { Component, OnInit } from '@angular/core';
import {StoreMessagesService} from "../../../../store-messages.service";

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  constructor(private mesageServis: StoreMessagesService) { }

  toggleFiles(){
    return this.mesageServis.toggleFiles();
  }

  ngOnInit(): void {
  }

}
