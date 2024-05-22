const express = require ('express');
const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..','data', 'products.json')

const router = express.Router();

router.get('/', (req,res) => res.redirect('/products'))
router.get('/products',(req,res) => {
    fs.readFile(p, (err, products) => {
        res.render('index', {pageTitle: "Web shop", path: '/products', products: JSON.parse(products)})
    })
    
});

router.get("/products/:id", (req,res) => {
    const { id } = req.params;

    fs.readFile(p, (err, products) => {
        const product = JSON.parse(products).find((product) => product.id === id)
        const error = {message:"Not Found"};
        if (!product) return res.render('error', {pageTitle: error.title, path:"*", error})
        res.render("product-detail", {pageTitle: product.title, path: '/products', product});
    })
});

module.exports=router;