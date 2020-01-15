const bodyParser    = require('body-parser'),
express             = require('express'),
mongoose            = require('mongoose'),
app                 = express();


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
require('dotenv').config();
var url = process.env.MONGO_URL;
//var url = process.env['MONGO_URL'];
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
  moduleDescription: String,
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
//   moduleDescription: "The module aims to provide students with an introduction to the mathematics, both continuous and discrete, which lies at the foundation of many real-world applications in Computer Science, Engineering and the Social Sciences. Mathematics is of interest to computer scientists due to the fact that it is both practical and theoretical in nature. Not only does it have a myriad of applications (e.g. in wireless communications and computer graphics), it is also of intrinsic interest to theoretical computer scientists.  The mathematical techniques learned as part of this module have wider applications in areas as diverse as Business (e.g. for modelling volatility and risk), Economics and Engineering (e.g. for structural monitoring). This module aims to develop the students’ skills and abilities in the mathematical methods necessary for solving practical problems.  In the first semester students will encounter some of the key mathematical structures at the heart of computer science including the representation of data using matrices. They will gain a greater appreciation of the relationships between calculus and the graphs of functions, including the representation of functions using Taylor Series.  During Semester 2 students will be introduced to discrete mathematics and mathematical logic along with their applications to computer science. In particular, the module will introduce set operations, discrete maths functions in Number Theory and Logic calculation. This part of the module is influenced by the approaches of Backhouse, Dijkstra and Gries. One of the key objectives for this module is to introduce students to the learning styles needed for university level mathematics. Students will be encouraged to develop the independent, reflective learning skills needed for success at University level.  It is expected that students will adapt their learning style to become more independent, self-motivated learners.",
//   lecturers:[{
//     lecturerName: "Dr. Meriel Huggard"
//   }],
//   moduleComments: [{
//     alias: "Zoomer Guy",
//     email: "oppa@tcd.ie",
//     comment: "I did't get the point of the maths being taught in this module"
//   },
//   {
//     alias: "slowbat",
//     email: "oppadendi@tcd.ie",
//     comment: "Evaluate the line integral where C is the given curve. We're integrating over the curve C, y to the third ds, and C is the curve with parametric equations x = t cubed, y = t. We're going from t = 0 to t = 2. So we're going to integrate over that curve C of y to the third ds. We're going to convert everything into our parameter t in terms of our parameter t. So I'm going to be integrating from t = 0 to t = 2. Those will be my limits of integration. Now y is equal to t, so I'm going to replace y with what it's equal to in terms of t. So I'm going to be integrating the function t to the third. Now ds we're going to write as a square root of dx dt squared + dy dt squared, squared of all that as we said dt. So we're integrating now everything with respect to t. So this is going to be equal to the integral from 0 to 2 of t to the third times the square root of -- see the derivative of x with respect to t is 3 t squared. So we have 3 t squared squared + dy dt; well, that's just 1 squared dt. So we have the integral from 0 to 2 of t to the third times the square root of 9 t to the fourth + 1 dt. So this is a pretty straightforward integration here. We're going to let u be equal to 9 t to the fourth + 1 then du is equal to 36 t to the third dt and so that tells me I can replace a t to the third dt with a du over 36. And so we're going to have the integral then from -- well, new limits of integration. I'm just going to put some squiggly marks there to remind myself that we switched variables. So I'm not going from t = 0 to t = 2. I'm doing things in terms of you right now. But I have a 1 over 36. I'll put that out front, and we're going to have the square root of u. So u to the 1/2, t to the third dt was replaced by du over 36. We got the 36 out front. And so now this is a pretty easy antiderivative in terms of u. It's u to the 3/2 times 2/3. And again, different limits of integration. We could figure out what they are in terms of u, but I'm going to convert back into t. So we're going to have 1 over 36 times 2/3 times u to the 3/2. Now, u is 9 t to the fourth + 1, that to the 3/2 power. And now we can go ahead and go from original limits of integration 0 to 2. So let's see, when I put a 2 in here, we're going to have -- 1 over 36 times 2/3. That's going to be 1 over 54, isn't it? So we'll have 1 over 54 times -- putting a 2 in, we have 9 times 2 to the fourth. That's 9 times 16, which is 144 + 1, is 145. So we put the 2 in there, we get 145 to the 3/2 minus, putting the 0 in, we get 9 x 0 to the fourth. That's 0. 0 + 1 is 1. So we just get 1 to the 3/2 or 1. So let's see, what's the best way to write this. How about 1 over 54 -- I guess we could leave it like that. We could also write 145 to the 3/2 as 145 times the square root of 145 and then minus 1. And that is that line integral of y to the third ds over the given curve C."
//   }]
// })

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

app.get('/internships', (req, res) => {
    Internships.find({}, function(err, internships){
    if(err){
      console.log(err);
    } else{
      res.render('internships', {internshipPosts: internships});
    }
  });
});

// app.get('/modules', (req, res) => {
//   res.render('modulesIndex');
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
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () =>{
  console.log("Server running on "+ HOST + ":" + PORT +  " ...");
});
