const express = require ('express');
const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname,'..', 'data', 'products.json')

const router = express.Router();

const adminControllers = require('../controllers/admin.controllers')

router.get ('/admin/add-product', adminControllers.getAddProduct);

router.post('/admin/add-product', adminControllers.postAddProduct);

router.get ('/admin/products', adminControllers.getProduct);

router.get ('/admin/orders', adminControllers.getOrders);

module.exports=router;