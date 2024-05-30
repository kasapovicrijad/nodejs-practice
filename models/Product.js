const fs = require("fs");
const path = require("path");

module.exports = class Product{
    constructor(title,price){
        this.title = title;
        this.price = price;
    }
    save(){
        const p = path.join(__dirname, "..", "data", "products.json");
        fs.readFile(p, (err, fileContent)=>{
            let products = []
            if (!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
}