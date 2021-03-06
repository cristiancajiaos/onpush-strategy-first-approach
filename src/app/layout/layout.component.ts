import { UserService } from './../services/user.service';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user: User = {
    firstName: 'Alice',
    lastName: 'Smith'
  };

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  subscribe(email: string) {

  }

  changeUserName() {
    console.log('changeUserName()');
    this.userService.loadUser({firstName: 'Bob', lastName: 'Smith'})
  }

}
