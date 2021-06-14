import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  channelName!: string;
  bc!: BroadcastChannel;
  constructor() { }

  setChannelName(ch: string) {
    this.channelName = ch;
    this.bc = new BroadcastChannel(this.channelName);
  }

  login(email: string, password: string) {
    const data = {
      action: 'login',
      email: email,
      password: password
    }
    this.bc.postMessage(data);
    //const event = new CustomEvent('loginEvent', { detail: data });
    //window.dispatchEvent(event);
  }

}
