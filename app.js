const express = require('express');
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public/index'));

app.get('/', (req, res) => {
    res.render('index');
    // hi
});

app.listen(4000, () => {
    console.log("Server started!");
});