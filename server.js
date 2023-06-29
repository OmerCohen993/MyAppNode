const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour", "userFive", "userSix"] })
})

app.listen(5000, () => { console.log("server at 5000") })