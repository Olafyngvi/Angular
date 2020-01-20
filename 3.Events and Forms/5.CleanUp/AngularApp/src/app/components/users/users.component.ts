import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
  email: ''
  };
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  showUserForm = false;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Agbon',
          lastName: 'Lahor',
          email: 'Agbon@gmail.com',
          isActive: true,
          registered: new Date('02/01/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Laszlo',
          lastName: 'Nagy',
          email: 'Laszlo@gmail.com',
          isActive: false,
          registered: new Date('03/11/2018 06:20:00'),
          hide: true
        },
        {
          firstName: 'Ze',
          lastName: 'Roberto',
          email: 'ZeRoberto@gmail.com',
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ];
      this.loaded = true;
  }
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
    lastName: '',
    email: ''
    };
  }
  onSubmit(e) {
    console.log(234);
    e.preventDefault();
  }
}
