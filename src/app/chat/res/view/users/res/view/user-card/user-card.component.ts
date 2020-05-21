import { Component, OnInit, Input } from '@angular/core';
import {StoreMessagesService} from "../../../../../../../store-messages.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() name:string;
  @Input() message:string;
  @Input() img:string;
  @Input() date:string;

  constructor(private storeMessagesService: StoreMessagesService) { }

  togglePersonal(){
    return this.storeMessagesService.togglePersonal();
  }

  ngOnInit(): void {
  }

}
