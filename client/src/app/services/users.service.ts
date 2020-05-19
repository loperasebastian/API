import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  login(user: User) {
    return this.http.post(`${this.URI}/login`, user);
  }
}
