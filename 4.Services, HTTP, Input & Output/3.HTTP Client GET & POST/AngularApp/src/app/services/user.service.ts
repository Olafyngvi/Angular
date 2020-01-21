import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

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
   getData() {
this.data = new Observable(observer => {
  setTimeout(() => {
observer.next( 1 );
  }, 1000);
  setTimeout(() => {
    observer.next( 2 );
      }, 2000);
  setTimeout(() => {
        observer.next( 3 );
          }, 3000);
  setTimeout(() => {
            observer.next( 4 );
              }, 4000);
});
return this.data;
   }
   getUsers(): Observable<User[]> {
     return of(this.users);
   }
   addUser(user: User) {
     this.users.unshift(user);
   }
}
