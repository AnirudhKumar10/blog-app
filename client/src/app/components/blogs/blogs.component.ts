import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getallblog().subscribe(
      <Response>(data) => {
        this.blogs = data.blogs;
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
