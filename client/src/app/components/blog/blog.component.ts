import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  blogId = this.route.snapshot.params.id;
  blog;

  ngOnInit() {
    this.blogService.getblogbyid(this.blogId).subscribe(<Response>(data) => {
      this.blog = data.blog[0];
    });
  }

  editBlog() {
    this.router.navigate(['/edit-blog/'+this.blogId])
  }

  deleteBlog() {
    console.log('Delete Blog');
  }

  isOwner() {
    if (this.blog.userId == localStorage.getItem('usr_id')) {
      return true;
    } else {
      return false;
    }
  }
}
