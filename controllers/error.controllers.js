const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, '..','data', 'products.json')

exports.get404 = (req ,res) => {
    const error = {message:"Not Found"};
    res.render("error", {pageTitle: error.title, path: "*", error});
}