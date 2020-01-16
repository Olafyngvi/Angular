import { Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls : ['./user.component.css']
})

export class UserComponent {
  // properties
  firstName: string;
  lastName: string;
  age: number;
  address;
  foo: any;
  hasKids: boolean;
  numberArray: number[];
  anyArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  // methods
  constructor() {
    this.firstName = 'Agbon';
    this.lastName = 'Lahor';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1, 2, 3, 4, 5];
    this.anyArray = ['Konj', 2, true, undefined];
    this.myTuple = ['avion', 5, false];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;

    console.log(this.addNumbers(2, 3));
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
