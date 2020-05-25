function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

let post1 = new Post('Nikita', 'Hello world', new Date());
console.log(post1);
post1.edit('Good Bye');
console.log(post1);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.TextHighlighted = function() {
    this.highlighted = true;
}

const attached1 = new AttachedPost('admin', 'lalalalala', new Date());
console.log(attached1);
attached1.TextHighlighted();
attached1.edit('Doremi fasol');
console.log(attached1);