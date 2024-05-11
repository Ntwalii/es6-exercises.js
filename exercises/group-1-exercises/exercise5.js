class Product{
    constructor(name,price){
        this.name=name;
        this.price=price
    }

    getDetails(){
        return `Product name: ${this.name}, Price: ${this.price}`
    }
    applyDiscount(discount){
        return this.price-this.price*(discount*0.01)
    }
}

class digitalProduct extends Product{
    constructor(name,price,downloadLink){
        super(name,price);
        this.downloadLink=downloadLink;
    }
    getDetails(){
        return `Product name: ${this.name}, Price: ${this.price}, Download Link: ${this.downloadLink}`   
    }
}

let obj1=new Product("Shirt",20000);
let obj2=new digitalProduct("shirt",3000,"www.ac.ac")

console.log(obj1);
console.log(obj2);