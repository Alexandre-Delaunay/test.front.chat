export class message {
  sender?: string;
  receiver?: string;
  content?: string;

  constructor(sender: string, receiver: string, content: string) {
    this.sender = sender;
    this.receiver = receiver;
    this.content = content;
  }
}
