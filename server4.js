

// SERVER WITH REPONSE

var app = require('express')()


app.get('/', (req,res) => {

    // // SEND TEXT
    // res.send('Hello')


    // // JSON REPONSE
    // res.json({
    //     'myJson' : 'oject'
    // })


    // // GENERATE A DOWNLOAD
    // res.download('./img/img.jpg')


    // //REDIRET 
    // res.redirect('/book/user/')


    


    
}),


app.listen(3000, (req,res) => console.log('the server is on, on port 300'))