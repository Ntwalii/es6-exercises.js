class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    getDetails(){
        return `name: ${this.name}, Price: ${this.price}`;
    }
    applyDiscount(discount){
        return `${this.price-(this.price*(discount/100))}`
    }
    
}

let obj1=new Product("shoes",10000)

console.log(obj1.getDetails())
console.log(obj1.applyDiscount(10))



