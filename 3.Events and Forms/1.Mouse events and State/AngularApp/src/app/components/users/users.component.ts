import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended = false;
  loaded = false;
  enableAdd = true;

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
          registered: new Date('02/01/2018 08:30:00')
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
          registered: new Date('03/11/2018 06:20:00')
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
          registered: new Date('11/02/2016 10:30:00')
        }
      ];
      this.loaded = true;
  }
  addUser(user: User) {
    this.users.push(user);
  }
  fireEvent(e) {
console.log(e.Type);
  }
}
