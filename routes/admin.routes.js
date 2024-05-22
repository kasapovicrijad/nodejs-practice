const express = require ('express');
const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname,'..', 'data', 'products.json')

const router = express.Router();

router.get ('/admin/add-product', (req,res) => {
    res.render("add-product", {pageTitle: "Add new product", path:"/admin/add-product"})
});

router.post('/admin/add-product', (req,res) => {
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
});


router.get ('/admin/products', (req,res) => {
    fs.readFile(p, (err, products) => {
        res.render('admin-products', {pageTitle: "Admin products", path: '/admin/products', products: JSON.parse(products)})
    })   
});

router.get ('/admin/orders', (req,res) => {
    fs.readFile(p, (err, products) => {
        res.render('orders', {pageTitle: "Orders", path: '/admin/orders'})
    })   
});

module.exports=router;