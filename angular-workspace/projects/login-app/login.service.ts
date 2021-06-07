import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string) {
    const data = {
      action: 'login',
      email: email,
      password: password
    }
    const event = new CustomEvent('loginEvent', { detail: data });
    window.dispatchEvent(event);
  }

}
