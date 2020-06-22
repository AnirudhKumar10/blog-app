import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  url = '/api/comments/';

  addComment(comment) {
    let headers = new HttpHeaders();
    headers = headers
      .append('content-type', 'application/json')
      .append('authorization', localStorage.getItem('usr_token'));
    return this.http.post(this.url, comment, { headers: headers });
  }

  getAllComments() {
    let headers = new HttpHeaders();
    headers = headers
      .append('content-type', 'application/json')
      .append('authorization', localStorage.getItem('usr_token'));
    return this.http.get(this.url, { headers: headers });
  }

  getAllCommentByBlogId(id) {
    return this.http.get(this.url+'blog/'+id);
  }
}
