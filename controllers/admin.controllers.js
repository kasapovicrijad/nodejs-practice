const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..','data', 'products.json')

const Product = require ('../models/Product')
exports.getAddProduct = (req,res) => {
    res.render("add-product", {pageTitle: "Add new product", path:"/admin/add-product"})
}


exports.postAddProduct = (req,res) => {
    const {title, price} = req.body;
    const product = new Product(title, price);
    product.save();
    res.redirect('/products');
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