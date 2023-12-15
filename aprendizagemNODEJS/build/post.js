"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(caption, pictureUrl, user) {
        this.caption = caption;
        this.pictureUrl = pictureUrl;
        this.user = user;
        this.likes = 0;
    }
    likeThePost(user) {
        console.log(`The user ${user.name} liked ${this.user.name} post.`);
        this.likes++;
        console.log(`Total likes: ${this.likes}`);
    }
}
exports.Post = Post;
