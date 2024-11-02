import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:5067/api/Users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<user[]>(this.url);
  }

  getsingleUser(id: number) {
    return this.http.get<user>(this.url + "/single?id=" + id);


  }

  addUser(user: any) {
    return this.http.post<user>(this.url, user)
  }
  updateUser(user: any) {
    return this.http.put(this.url, user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.url + "?id=" + id)
  }

}


export interface user {
  userId: number;
  name: string;
  email: string;
  password: string;
  phonenumber: string;

}
