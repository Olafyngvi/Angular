import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;
  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    // Subscribe to the selected log observable
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }
  onSubmit() {
    // check if new log
    if (this.isNew) {
      const newLog = { id: this.generateId(), text: this.text, date: new Date()};
      // Add log
      this.logService.addLog(newLog);
    } else {
      // create log to be updated
      const updatedLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      this.logService.updateLog(updatedLog);
    }
    this.clearState();
  }
  generateId() {
    let u = '';
    let i = 0;
    while (i++ < 36) {
        const c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i - 1];
        // tslint:disable-next-line: no-bitwise
        const r = Math.random() * 16 | 0;
        // tslint:disable-next-line: no-bitwise
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        u += (c === '-' || c === '4') ? c : v.toString(16);
    }
    return u;
  }
  clearState() {
    this.isNew = true;
    this.id = '';
    this.date = '';
    this.text = '';
    this.logService.clearState();
  }
}
