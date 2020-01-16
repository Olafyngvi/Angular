import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

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
        }
      },
      {
        firstName: 'Lazslo',
        lastName: 'Nagy',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Ze',
        lastName: 'Roberto',
        age: 30,
        address: {
          street: '60 Main st',
          city: 'Boston',
          state: 'MA'
        }
      }
    ];

    this.addUser({
      firstName: 'David',
      lastName: 'Bekam',
      age: 30,
      address: {
        street: '100 Main st',
        city: 'Boston',
        state: 'MA'
      }
    });
  }
  addUser(user: User) {
    this.users.push(user);
  }
}
