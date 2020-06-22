import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  url = '/api/blogs/';

  addblog(blog) {
    let headers = new HttpHeaders();
    headers = headers
      .append('content-type', 'application/json')
      .append('authorization', localStorage.getItem('usr_token'));
    return this.http.post(this.url, blog, { headers: headers });
  }

  getallblog() {
    return this.http.get(this.url);
  }

  getblogbyid(id) {
    return this.http.get(this.url + id);
  }

  getblogbyuserid(id) {
    let headers = new HttpHeaders();
    headers = headers
      .append('content-type', 'application/json')
      .append('authorization', localStorage.getItem('usr_token'));
    console.log(headers);
    return this.http.get(this.url + 'user/' + id, { headers: headers });
  }

  getallblogbyuserid(id) {
    let headers = new HttpHeaders();
    headers = headers
      .append('content-type', 'application/json')
      .append('authorization', localStorage.getItem('usr_token'));
    return this.http.get(this.url + 'user/all/' + id, { headers: headers });
  }

  updateblog(id, blog) {
    let headers = new HttpHeaders();
    headers = headers
      .append('content-type', 'application/json')
      .append('authorization', localStorage.getItem('usr_token'));
    return this.http.post(this.url + id, blog, { headers: headers });
  }

  deleteblog() {
    let headers = new HttpHeaders();
    headers = headers
      .append('content-type', 'application/json')
      .append('authorization', localStorage.getItem('usr_token'));
    return this.http.delete(this.url, { headers: headers });
  }

  updateblogbyuserid(id, blog) {
    let headers = new HttpHeaders();
    headers = headers
      .append('content-type', 'application/json')
      .append('authorization', localStorage.getItem('usr_token'));
    return this.http.put(this.url + 'update/user/' + id, blog, {
      headers: headers,
    });
  }
}
