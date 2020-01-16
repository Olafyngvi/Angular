import { Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls : ['./user.component.css']
})

export class UserComponent {
  // properties
  firstName = 'Agbon';
  lastName = 'Nagy';
  age = 30;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  };

  // methods

  constructor() {

  }
}
