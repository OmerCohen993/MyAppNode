const express = require('express');
const app = express();
const morgan = require('morgan');

//loger
app.use(morgan("dev"));

//get json to body
app.use(express.json());

//orgenized json
app.use(express.urlencoded({
    extended: false,
}));

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