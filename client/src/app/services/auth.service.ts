import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  url = '/api/users';
  user: any;
  authToken: any;

  login(user) {
    this.http.post(this.url + '/login', user).subscribe(<Response>(data) => {
      // console.log(data);
      this.setToken(data.token);
      localStorage.setItem('usr_token', data.token);
      localStorage.setItem('usr_id', data.userId);
      this.router.navigate(['/dashboard/profile'])
    }, (error) => {
      alert(error.error.message)
    });
  }

  register(user) {
    return this.http.post(this.url + '/register', user);
  }

  setToken(token) {
    this.authToken = token;
  }

  isloggedin() {
    if (localStorage.getItem('usr_token')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('usr_token');
    localStorage.removeItem('usr_id');
    this.router.navigate(['/'])
  }
}
