const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const imagesRoutes = require('./api/routes/imagesRoutes');

const category = "sport";
const api_url = `https://pixabay.com/a pi/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`;
const respons = fetch(api_url);
const json = respons.json();
console.log(json);

//loger
app.use(morgan("dev"));

//prevent cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin , X-Requested-With, Content-Type, Accept , Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "Put, Post, Patch, Delete, Get");
        return res.status(200).json({});
    }
    next();
});

//Route to /images
app.use('/images', imagesRoutes);

//exeption in case not root found
app.use((req, res, next) => {
    const error = new Error('Not Found beaiitchhhh');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})