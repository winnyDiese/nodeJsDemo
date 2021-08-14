

// FIRST SERVER

var express = require('express')
var app = express()

app.get('/', (req,res) => {
    res.send('<b>My<b/> fist express http server')
})

app.get('/welcome', (req,res) => {
    res.send('<b>Hello</b> welcome to my http server made with express')
})

app.use((req,res) => {
    res.status(404).send('Sorry that route doesn\'t exist. Have a nice day :)')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})





// ARCHITECTURE D'UN SERVER

// var expreess = require('express')
// var app = express();


// app.get('/', function(req,res,next){
//     next()
// })

// app.listen(3000)

