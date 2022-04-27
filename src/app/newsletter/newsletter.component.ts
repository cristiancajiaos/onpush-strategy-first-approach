import { User } from './../interfaces/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  @Input() user: User;

  @Output() subscribe = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }

}
