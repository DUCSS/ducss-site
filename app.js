const express = require('express');
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://basket:3448fc047e4657d16f6acb14b247b860@dokku-mongo-basket:27017/basket';
// Create a new MongoClient
const client = new MongoClient(url);
// Database Name
const dbName = 'baseket';
const internshipPosts;
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  db.collection('internships').find().toArray(function (err, result) {
    if (err) throw err
    internshipPosts = result;
  })
  client.close();
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
