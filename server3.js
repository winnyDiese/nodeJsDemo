


// LEARN CREATE SERVER WITH PARAMETTRE

var app = require('express')();



app.get('/', (req,res) => {
    res.send('<b>My</b> first express http server');
})



//route with parametre
//matches : /book/Abedi/categuory/Developpeur

app.get('/book/:user/categuory/:categuory', (req,res) => {
    console.log(res.params)
    var username = req.params.users
    var categuorie = req.params.categuory
    res.send(req.params)
})



app.use((req,res,next) => {
    res.status(404).send('sorry, that route not exist. Have a nice day ;)')
})

app.listen(3000, () => console.log('The server is on, in port 300'))