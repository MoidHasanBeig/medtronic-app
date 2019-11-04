const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.listen(3000, () => {
  console.log("Server is live @ 3000");
});

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {

});

app.post("/", (req,res) => {

});
