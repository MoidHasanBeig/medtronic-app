const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let query = ['Quotation','Demo','Sales Person meeting'];

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


app.listen(3000, () => {
  console.log("Server is live @ 3000");
});

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {
  res.render("index", {userQuery:query});
});

app.post("/", (req,res) => {
  console.log(req.body);
  // alert("You have successfully raised your query.");
  res.redirect("/");
});
