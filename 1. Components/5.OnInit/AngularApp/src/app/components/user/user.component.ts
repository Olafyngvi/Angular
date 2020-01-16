import { Component, OnInit} from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls : ['./user.component.css']
})

export class UserComponent implements OnInit {
  // properties
  user: User;

  // methods
  constructor() { }
  ngOnInit() {
    this.user = {
      firstName: 'Agbon',
      lastName: 'Lahor',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      }
    };
  }
}
