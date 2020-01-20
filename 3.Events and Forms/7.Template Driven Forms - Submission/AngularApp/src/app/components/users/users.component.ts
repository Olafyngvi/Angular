import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('userForm', {static: false}) form: any;

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

  onSubmit({value, valid}: {value: User, valid: boolean}) {
   if (!valid) {
console.log('Form is not valid');
   } else {
     value.isActive = true;
     value.registered = new Date();
     value.hide = true;
     this.users.unshift(value);
     this.form.reset();
     this.showUserForm = false;
   }
  }
}
