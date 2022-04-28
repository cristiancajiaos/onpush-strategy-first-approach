import { UserService } from './../services/user.service';
import { Observable, timeout } from 'rxjs';
import { User } from './../interfaces/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NewsletterService } from './newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {

  firstName: string;

  constructor(
    private newsletterService: NewsletterService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe(
      user => this.firstName = user.firstName
    );
  }

  subscribeToNewsletter(email: string) {
    this.newsletterService.subscribe(email);
  }


}
