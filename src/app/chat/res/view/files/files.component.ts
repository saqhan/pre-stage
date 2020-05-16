import { Component, OnInit } from '@angular/core';
import {StoreMessagesService} from "../../../../store-messages.service";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private messageServis: StoreMessagesService) { }

  toggleUsers() {
    return this.messageServis.toggleUsers();
  }

  ngOnInit(): void {
  }

}
