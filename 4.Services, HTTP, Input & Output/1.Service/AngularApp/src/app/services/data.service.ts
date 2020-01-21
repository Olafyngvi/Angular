import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
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
   }
   getUsers(): User[] {
     return this.users;
   }
   addUser(user: User) {
     this.users.unshift(user);
   }
}
