import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

const ANONYMOUS_USER: User = {
  firstName: '',
  lastName: ''
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  constructor(
    private userService: UserService
  ) { }

  subscribe(email: string) {
    this.userService.loadUser({firstName: 'Bob', lastName: 'Smith'});
  }
}
