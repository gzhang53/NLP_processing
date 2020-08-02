//https://knowledge.udacity.com/questions/229577
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require('aylien_textapi')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });


const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)


projectData = {};
const data =[]

app.post('/',addData)

function addData(req,res){
    data.push(req.body)

    data['info'] = req.body.info

    textapi.sentiment({
        text:data.info,
        mode:'tweet'
    }, function(error,response){
        if (error === null){

            projectData['polarity'] = response.polarity
            projectData['subjectivity'] = response.subjectivity
            projectData['polarity_confidence'] = response.polarity_confidence
            projectData['subjectivity_confidence'] = response.subjectivity_confidence

            res.send(projectData)
        }
    })
}
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    
})


app.get('/sentiment', function (req, res) {
    res.send(projectData)
    
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
