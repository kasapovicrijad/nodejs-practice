const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..','data', 'products.json')

exports.getCart = (req,res) => {
    fs.readFile(p, (err, products) => {
        res.render('cart', {pageTitle: "Cart", path: '/cart'})
    })
    
}