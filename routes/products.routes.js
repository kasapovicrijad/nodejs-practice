const express = require ('express');
const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..','data', 'products.json')

const router = express.Router();

const productsControllers = require('../controllers/products.controllers')

router.get('/', (req,res) => res.redirect('/products'))

router.get('/products', productsControllers.getProducts);

router.get("/products/:id", productsControllers.getProducts);

module.exports=router;