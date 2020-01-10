const express = require('express');
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.MONGO_URL;
var internshipPosts;
MongoClient.connect(url, function(err, db) {
  var dbo = db.db("basket");
  dbo.collection('internships').find().toArray(function (err, result) {
    if (err) throw err
    internshipPosts = result;
  });
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/internships', (req, res) => {
  res.render('internships', {internshipPosts: internshipPosts});
});

// process.env.PORT is the port of the server(DigitalOcean) that is listening
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () =>{
  console.log("Server running on "+ HOST + ":" + PORT +  " ...");
});
