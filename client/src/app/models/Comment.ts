export class Comment {
    comment: String;
    blogId: String;
    userId: String;

    constructor(comment, bid, uid) {
        this.comment = comment;
        this.blogId = bid;
        this.userId = uid;
    }
}