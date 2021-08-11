class MyBook{
    constructor(title,author,price){
        this.title=title;
        this.author=author;
        this.price=price;
    }
    display(){
        let title=this.title;
        let price=this.price;
        let author=this.author;
        console.log('Title: '+title);
        console.log('Author: '+author);
        console.log('Price: '+price);
    }
};
