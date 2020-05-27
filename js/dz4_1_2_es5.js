'use strict';
/**
 * 
 * @param {*} author 
 * @param {*} text 
 * @param {*} date 
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (text) {
    this.text = text;
}
/**
 * 
 * @param {*} author 
 * @param {*} text 
 * @param {*} date 
 */
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}
let post1 = new Post("Nikita", "Lalala", new Date());
console.log(post1);
post1.edit('edit');
console.log(post1);
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}
let post2 = new AttachedPost("Roma", "ROzaaaaa", new Date());
console.log(post2);
post2.makeTextHighlighted();
post2.edit("Кожа рожа");
console.log(post2);
