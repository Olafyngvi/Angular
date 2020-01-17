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
  currentClasses = {};
  currentStyles = {};

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
          image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          isActive: true,
          balance: 100,
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
          image: 'https://images.pexels.com/photos/3217626/pexels-photo-3217626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          isActive: false,
          balance: 200,
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
          image: 'https://images.pexels.com/photos/3254349/pexels-photo-3254349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          isActive: true,
          balance: 50,
          registered: new Date('11/02/2016 10:30:00')
        }
      ];
      this.loaded = true;
      this.setCurrentClasses();
      this.setCurrentStyles();
  }
  addUser(user: User) {
    this.users.push(user);
  }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '60px',
      'font-size': this.showExtended ? '' : '50px'
    };
  }
}
