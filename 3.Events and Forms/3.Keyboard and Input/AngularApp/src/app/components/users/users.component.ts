import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = true;
  showUserForm = false;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Agbon',
          lastName: 'Lahor',
          age: 30,
          address: {
            street: '20 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('02/01/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Laszlo',
          lastName: 'Nagy',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('03/11/2018 06:20:00'),
          hide: true
        },
        {
          firstName: 'Ze',
          lastName: 'Roberto',
          age: 30,
          address: {
            street: '60 Main st',
            city: 'Boston'
          },
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ];
      this.loaded = true;
  }
  addUser(user: User) {
    this.users.push(user);
  }
  onSubmit(e) {
    console.log(234);
    e.preventDefault();
  }
  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }
}
