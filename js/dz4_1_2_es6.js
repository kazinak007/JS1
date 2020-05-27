/**
 * 
 * @param {*} author 
 * @param {*} text 
 * @param {*} date 
 */
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
// c наследованием
class AttachedPost extends Post{
    constructor(author, text, date){
        //обратить к род. свойствам конструктора
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}
let post2 = new AttachedPost("Roma", "ROzaaaaa", new Date());
console.log(post2);
post2.makeTextHighlighted();
post2.edit("Кожа рожа");
console.log(post2);
