import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private socket: Socket) { }

  ngOnInit(): void {
    this.socket.fromEvent('connect').subscribe(() => {
      this.socket.emit('Ping', 'ping');
    });

    this.socket.fromEvent('Test').subscribe(ev => console.log('Test', ev));
    this.socket.fromEvent('Pong').subscribe(ev => console.log('Pong', ev));
    this.socket.fromEvent('UserJoined').subscribe(ev => console.log('UserJoined', ev));
    this.socket.fromEvent('UserLeft').subscribe(ev => console.log('UserLeft', ev));
  }
}
