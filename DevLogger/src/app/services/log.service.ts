import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('12/26/2020 12:54:00')
      },
      {
        id: '2',
        text: 'Added login',
        date: new Date('12/26/2020 11:54:00')
      },
      {
        id: '3',
        text: 'Added bootstrap',
        date: new Date('12/27/2020 09:54:00')
      }
    ];
    // Add to local storage
   }
   getLogs(): Observable<Log[]> {
     if (localStorage.getItem('logs') === null){
      this.logs = [];
     } else {
       this.logs = JSON.parse(localStorage.getItem('logs'));
     }
     return of(this.logs.sort((a, b) => {
       return b.date = a.date;
     }));
   }
   setFormLog(log: Log) {
     this.logSource.next(log);
   }
   addLog(log: Log) {
     this.logs.unshift(log);
     localStorage.setItem('logs', JSON.stringify(this.logs));
   }
   updateLog(log: Log) {
    this.logs.forEach((cur, ind) =>{
      if (log.id === cur.id) {
        this.logs.splice(ind, 1);
      }
    });
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));
   }
   deleteLog(log: Log) {
     this.logs.forEach((cur, ind) => {
      if (log.id === cur.id) {
        this.logs.splice(ind, 1);
      }
     });
     localStorage.setItem('logs', JSON.stringify(this.logs));
   }
   clearState() {
    this.stateSource.next(true);
   }
}
