const express = require('express');
const app = express();

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