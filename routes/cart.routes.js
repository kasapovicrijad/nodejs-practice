const express = require ('express');
const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..','data', 'products.json')

const router = express.Router();

const cartControllers = require('../controllers/cart.controllers')

router.get('/cart', cartControllers.getCart);

module.exports=router;