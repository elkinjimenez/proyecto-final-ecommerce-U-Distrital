import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  logueado = false;

  constructor(
    private http: HttpClient,
  ) {
    if (sessionStorage.getItem(btoa('client')) || sessionStorage.getItem(btoa('user'))) {
      this.logueado = true;
    } else {
      this.logueado = false;
    }
  }

  auth(body: Client) {
    return this.http.post('http://localhost:1337/api/client/auth', body);
  }
}
