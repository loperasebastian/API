import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/saveuser';

@Injectable({
  providedIn: 'root'
})
export class SaveUserService {
  URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  register(user: User) {
    return this.http.post(`${this.URI}/register`, user);
  }

}
