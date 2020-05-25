'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post1 = new Post('Nikita', 'hello world', new Date());
console.log(post1);
post1.edit('Good bye');
console.log(post1);


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    TextHighlighted() {
        this.highlighted = true;
    }
}

const attached1 = new AttachedPost('admin', 'lalalala', new Date());
console.log(attached1);
attached1.TextHighlighted();
attached1.edit('Doremi fasol');
console.log(attached1);