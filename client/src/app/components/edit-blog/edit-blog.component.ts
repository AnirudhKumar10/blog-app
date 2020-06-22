import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
})
export class EditBlogComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  blogId = this.route.snapshot.params.id;
  blog;

  ngOnInit() {
    this.blogService.getblogbyuserid(this.blogId).subscribe(
      <Response>(data) => {
        this.blog = data.blog[0];
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submit() {
    this.blogService.updateblogbyuserid(this.blogId, this.blog).subscribe(
      <Response>(data) => {
        this.blog = data.blog[0];
        console.log(data);
        this.router.navigate(['/blog/'+this.blogId])
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
