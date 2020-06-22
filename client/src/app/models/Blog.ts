export class Blog {
    title: String;
    desc: String;
    userId: String;

    constructor(title, desc, uid) {
        this.title = title;
        this.desc = desc;
        this.userId = uid;
    }
}