const bodyParser    = require('body-parser'),
express             = require('express'),
mongoose            = require('mongoose'),
app                 = express();


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
require('dotenv').config();
//var url = process.env.MONGO_URL;
var url = process.env['MONGO_URL'];
mongoose.connect(url);


var internshipSchema = new mongoose.Schema({
  thumbnail: String,
  title: String,
  description: String,
  datePosted: String,
  id: Number
});

var Internships = mongoose.model("internships", internshipSchema);
var internshipPosts;

Internships.find({}, function(err, res){
  if(err){
    console.log(err);
  } else{
    internshipPosts = res;
  }
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

app.get('/modules', (req, res) => {
  res.render('modules');
});

app.get('/modules/:id', (req, res) => {
  res.render('modules');
});

// process.env.PORT is the port of the server(DigitalOcean) that is listening
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () =>{
  console.log("Server running on "+ HOST + ":" + PORT +  " ...");
});
