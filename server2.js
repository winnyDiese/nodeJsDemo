
// THE ROUTER

var express = require('express')
var app = express()


app.get('/', (req,res) => {
    res.send('<b>My first express http server')
})

app.route('/article')
.get((req,res) => {
    res.send('Get the article')
})
.post((req,res)=>{
    res.send('Add an article')
})
.put((req,res) => {
    res.send('Update the article')
})



app.listen(3000, ()=>console.log('The App turn'))