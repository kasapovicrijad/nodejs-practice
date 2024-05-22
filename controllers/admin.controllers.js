const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..','data', 'products.json')

exports.getAddProduct = (req,res) => {
    res.render("add-product", {pageTitle: "Add new product", path:"/admin/add-product"})
}


exports.postAddProduct = (req,res) => {
    const {title, price} = req.body;

    const product= {
        id:v4(),
        title,
        price
    }

    fs.readFile(p, (err, products) => {
        const updatedProducts = [ product, ...JSON.parse(products)];
        fs.writeFile(p, JSON.stringify(updatedProducts), () => {
            res.redirect('/')
        })
    })
}

exports.getProduct = (req,res) => {
    fs.readFile(p, (err, products) => {
        res.render('admin-products', {pageTitle: "Admin products", path: '/admin/products', products: JSON.parse(products)})
    })   
}

exports.getOrders = (req,res) => {
    fs.readFile(p, (err, products) => {
        res.render('orders', {pageTitle: "Orders", path: '/admin/orders'})
    })   
}