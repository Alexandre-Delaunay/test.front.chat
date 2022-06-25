import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { message } from '../models/message.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() name: string | null = null;
  @Input() receiver: string | null = null;
  @Input() messages: Array<message> = [];

  @Output() messageEvent: EventEmitter<message> = new EventEmitter<message>();

  form = new FormGroup({ content: new FormControl(null) });

  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.name == null) return;

    if (this.receiver == null) return;

    let content = this.form.controls.content.value;

    if (content == null || content == '') return;

    let messageToSend = new message(this.name, this.receiver, content);

    this.messageEvent.emit(messageToSend);
  }
}
