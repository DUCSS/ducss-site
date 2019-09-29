const express = require('express');
const app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

// app.get('/events', (req, res) => {
//   res.render('events');
// });

// app.get('/esports', (req, res) => {
//   res.render('esports');
// });

// app.get('/minecraft', (req, res) => {
//   res.render('minecraft');
// });

app.get('/contact', (req, res) => {
  res.render('contact');
});

// will be aranged so that id 0 is the very last internship on the webpage
var internshipPosts = [
  {thumbnail:  "https://www.computing.dcu.ie/sites/default/files/images/Arista%20Logo-7.preview.jpg"
  ,title: "Recruiting Graduate Software Engineers for 2020"
  ,description: "Arista Networks is looking for great Graduate/Intern Engineers interested in product development in C/C++ and Go to join the team in Dublin advancing the Software Defined Networking (SDN) revolution. For more info: https://drive.google.com/file/d/17c_Vgsh2fDGFhvogYDtWhZH-fdIvbvU8/view?usp=sharing"
  ,datePosted: "23rd September 2019"
  ,id: 1
  },
  {thumbnail:  "https://ci6.googleusercontent.com/proxy/H7Y10GSxbJ5arVsjOXXl31jT684OGYqCivrafo1Fz5D0AZujUImCWZgvb-Be-nTSrxyIVeeLbkWtVqB3UpakhzRU0FfHuy6MmMpTkcIuLsNkjOIIlPWPO-lOJ7FOA2FTE3Fq9xH8vqr0PTpOaYhdlig=s0-d-e1-ft#http://d31hzlhk6di2h5.cloudfront.net/20190908/0b/fe/e4/be/1aa382e688eb3ee2638e4464_560x294.jpg"
    ,title: "SIG Job Opportunities"
    ,description: "Our proud sponsor Susquehanna International Group has many internship opportunities available. More on that, and their graduate programmes (both SW and Infrastructure) can be found in this folder: https://drive.google.com/drive/folders/181xL7ksxSz06nPi1eHKCvefGTOYUqHN2?usp=sharing"
    ,datePosted: "8th September 2019"
    ,id: 0
  }
];


app.get('/internships', (req, res) => {
  res.render('internships', {internshipPosts: internshipPosts});
});

// process.env.PORT is the port of the server(DigitalOcean) that is listening

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () =>{
  console.log("Server running on "+ HOST + ":" + PORT +  " ...");
});
