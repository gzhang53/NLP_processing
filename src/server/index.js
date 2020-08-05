//https://knowledge.udacity.com/questions/229577
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require('aylien_textapi')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const https = require('follow-redirects').https;
dotenv.config();

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    
})

app.post('/',(req,res)=>{

   newData = req.body.userData;

   const options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=b571f9d3336fc8bf79d98c0cc4616c90&lang=en&txt=iloveyou`,
    'headers': {
    },
    'maxRedirects': 20
  };


  const request = https.request(options,function(response){
      chunks = [];
      response.on("data", function(chunk){
            chunks.push(chunk);
      });

      response.on("end",function(chunk){
          let body = Buffer.concat(chunks);
           res.send(JSON.parse(body));
          
      });

      response.on("error", function (error) {
        console.error(error);
      });
      
  });

  request.end()
}
)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
