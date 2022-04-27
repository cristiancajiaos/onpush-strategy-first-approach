import { User } from './../interfaces/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {
  @Input() user: User;

  @Output() subscribe = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
}
