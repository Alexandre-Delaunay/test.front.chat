import { Component, OnInit } from '@angular/core';
import { message } from './models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  firstChatName = "Chat A";
  secondChatName = "Chat B";

  messages: Array<message> = [];

  ngOnInit() {}

  messageReceived(message: message): void {
    this.messages.push(message);
  }
}
