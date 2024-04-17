const express = require('express')
const app = express()
const loginRout = require('./routes/LoginRoute')


app.set('view engine', 'ejs')
app.set('views', './views/login')







app.use(loginRout)




app.listen(3000, function(){
    console.log(`App rodando na porta 3000`);
})