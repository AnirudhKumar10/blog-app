import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent {
  constructor(
    private auth: AuthService,
    private blogService: BlogService,
    private router: Router
  ) {}
  title;
  desc;

  submit() {
    if (this.auth.isloggedin()) {
      let blog = new Blog(
        this.title,
        this.desc,
        localStorage.getItem('usr_id')
      );
      this.blogService.addblog(blog).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/dashboard/my-blogs'])
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
