const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let query = ['Quotation','Demo','Sales Person meeting'];

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, () => {
  console.log("Server is live @ 3000");
});

app.get("/", (req,res) => {
  console.log(req.query.message);
  let obj = {userQuery:query, message : req.query.message}
  res.render("index", obj);
});

app.post("/", (req,res) => {
  console.log(req.body);
  let message = "Hey  we got you"
  res.redirect(`/?message=${message}`);
});
