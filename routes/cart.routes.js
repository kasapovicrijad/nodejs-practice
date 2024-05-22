const express = require ('express');
const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..','data', 'products.json')

const router = express.Router();

router.get('/cart',(req,res) => {
    fs.readFile(p, (err, products) => {
        res.render('cart', {pageTitle: "Cart", path: '/cart'})
    })
    
});

module.exports=router;