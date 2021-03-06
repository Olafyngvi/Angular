import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';


import { Client } from '../../models/Client';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };
  // tslint:disable-next-line: no-inferrable-types
  disableBalanceOnAdd: boolean = true;
  @ViewChild('clientForm', null) form: any;

  constructor(private flashMessage: FlashMessagesService,
              private clientService: ClientService,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {cssClass: 'alert-danger', timeout: 4000});
    } else {
      // Add new client
      // Show message
      // Redirect to /
      this.clientService.newClient(value);
      this.flashMessage.show('New client added', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }
  }
}
