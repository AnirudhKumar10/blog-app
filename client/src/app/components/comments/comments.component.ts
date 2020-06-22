import { Component } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.commentService
      .getAllCommentByBlogId(this.blogId)
      .subscribe(<Response>(data) => {
        this.comments = data.comments;
      });
  }

  comments = [];
  comment;
  blogId = this.route.snapshot.params.id;

  addComment() {
    let c = new Comment(
      this.comment,
      this.blogId,
      localStorage.getItem('usr_id')
    );

    this.commentService.addComment(c).subscribe(
      <Response>(data) => {
        this.comments.push(c);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isOwner(id) {
    if (localStorage.getItem('usr_id') === id) {
      return true;
    } else {
      return false;
    }
  }
}
