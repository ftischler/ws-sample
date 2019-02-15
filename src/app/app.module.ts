import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Socket, SocketIoModule } from 'ngx-socket-io';

export function socketFactory(): Socket {
  const token: string | undefined = localStorage.getItem('token');
  const options = token ? { query: `token=${token}` } : {};

  return new Socket({
    url: '/', options: {
      ...options,
      transports: ['websocket']
    }
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule
  ],
  providers: [
    { provide: Socket, useFactory: socketFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
