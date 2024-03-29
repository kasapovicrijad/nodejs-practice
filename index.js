const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const fs = require('fs');
const p = path.join(__dirname, 'data', 'products.json')

const app = express();

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, "views"))

app.use(express.static("public"))

app.use(express.urlencoded({ extended: false }));

const productsRoutes = require('./routes/products.routes');
const adminRoutes = require('./routes/admin.routes');
app.use(productsRoutes)
app.use(adminRoutes)

app.get("*", (req ,res) => {
    const error = {message:"Not Found"};
    res.render("error", {pageTitle: error.title, error});
});

app.listen(5000);