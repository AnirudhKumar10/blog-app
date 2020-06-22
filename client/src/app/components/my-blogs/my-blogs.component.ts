import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css'],
})
export class MyBlogsComponent {
  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getallblogbyuserid(localStorage.getItem('usr_id')).subscribe(
      <Response>(data) => {
        this.blogs = data.blogs
      },
      (error) => {
        console.log('Error Fetching blogs.');
      }
    );
  }

  blogs: any = [];

  readBlog(blogId) {
    this.router.navigate(['/blog/' + blogId]);
  }
}
