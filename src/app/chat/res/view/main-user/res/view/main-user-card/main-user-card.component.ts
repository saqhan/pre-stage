import {Component, Input, OnInit} from '@angular/core';
import {StoreMessagesService} from "../../../../../../../store-messages.service";

@Component({
  selector: 'app-main-user-card',
  templateUrl: './main-user-card.component.html',
  styleUrls: ['./main-user-card.component.css']
})
export class MainUserCardComponent implements OnInit {

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
