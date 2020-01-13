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

var moduleSchema = new mongoose.Schema({
  moduleCode: String,
  moduleName: String,
  lecturers: [{
    lecturerName: String
  }],
  moduleComments: [{
    alias: String,
    email: String,
    comment: String,
    created: {type: Date, default: Date.now}
  }]
});
var Modules = mongoose.model("modules", moduleSchema);

// Modules.create({
//   moduleCode: "CSU11001",
//   moduleName: "Mathematics I",
//   lecturers:[{
//     lecturerName: "Dr. Meriel Huggard"
//   }],
//   moduleComments: [{
//     alias: "Zoomer Guy",
//     email: "oppa@tcd.ie",
//     comment: "I did't get the point of the maths being taught in this module"
//   }]
// })



app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/internships', (req, res) => {
    Internships.find({}, function(err, internships){
    if(err){
      console.log(err);
    } else{
      res.render('internships', {internshipPosts: internships});
    }
  });
});

app.get('/modules', (req, res) => {
  res.render('modulesIndex');
});

app.get('/modules/:id', (req, res) => {
  Modules.find({moduleCode: req.params.id}, function(err, module){
    if(err){
      console.log(err);
    } else{
      res.render('module', {moduleInfo: module[0]});
    }
  });
});

// process.env.PORT is the port of the server(DigitalOcean) that is listening
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () =>{
  console.log("Server running on "+ HOST + ":" + PORT +  " ...");
});
