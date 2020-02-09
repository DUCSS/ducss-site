const bodyParser    = require('body-parser'),
express             = require('express'),
mongoose            = require('mongoose'),
app                 = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// if docker app is started before mongodb can accept connections, the connection will try again
var connectWithRetry = function() {
  return mongoose.connect('mongodb://db:27017/internships', function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec');
      setTimeout(connectWithRetry, 5000);
    }
  });
};
connectWithRetry();

// var internshipSchema = new mongoose.Schema({
//   thumbnail: String,
//   title: String,
//   description: String,
//   datePosted: String,
//   id: Number
// });
// var Internships = mongoose.model("internships", internshipSchema);

// var moduleSchema = new mongoose.Schema({
//   moduleCode: String,
//   moduleName: String,
//   moduleDescription: String,
//   lecturers: [{
//     lecturerName: String
//   }],
//   moduleComments: [{ 
//     alias: String,
//     email: String,
//     comment: String,
//     created: {type: Date, default: Date.now}
//   }]
// });
// var Modules = mongoose.model("modules", moduleSchema);

// Internships.create({
//   thumbnail: "https://media.glassdoor.com/sqll/850344/millennium-management-investment-firm-squarelogo-1492188791303.png",
//   title: "Hedge Fund Technology & Computing Summer Internship 2020",
//   description: "Hedge Fund Technology & Computing Summer Internship 2020 Millennium Capital Partners – Dublin & London Technology Opportunities Millennium Management is a global investment management firm founded in 1989 that manages approximately $40 billion asset under management. Millennium c.3000 employees with offices in the United States, Europe and Asia. Dublin office – Infrastructure Technology Internship https://trkr.app/campaign/millennium-capital-partners-intern-campaign-2020-dublin-office-technology-roles/?fbclid=IwAR1o22hclFrcxhT4g_OpQHpzT7aHuafgVBvvgjhHuneBpEzU-GiFlGSJ_PQ London office – Technology Internships (various departments) https://trkr.app/campaign/millennium-capital-partners-intern-campaign-2020/?fbclid=IwAR3Dv5lmyNCxDWKKiCIG5ukaKNwIlS1VITrscNdJuKn_4h5gBjRnjeCKiTU",
//   datePosted: "9th January 2020",
//   id: 3
// })


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/future50', (req, res) => {
  res.render('future50');
});

// app.get('/internships', (req, res) => {
//     Internships.find({}, function(err, internships){
//     if(err){
//       //console.log(err);
//     } else{
//       res.render('internships', {internshipPosts: internships});
//     }
//   });
// });

app.get('/modules', (req, res) => {
  res.render('modulesIndex');
});

// app.get('/hoodies', (req, res) => {
//   res.render('hoodies');
// });

// app.get('/modules/:id', (req, res) => {
//   Modules.find({moduleCode: req.params.id}, function(err, module){
//     if(err){
//       console.log(err);
//     } else{
//       res.render('module', {moduleInfo: module[1]});
//     }
//   });
// });

// process.env.PORT is the port of the server(DigitalOcean) that is listening
//const PORT = process.env.HOST || '8080';
const PORT = '8080'
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () =>{
  console.log("Server running on "+ HOST + ":" + PORT +  " ...");
});
