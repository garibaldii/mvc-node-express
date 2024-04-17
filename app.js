const express = require('express')
const app = express()
const loginRout = require('./routes/LoginRoute')

app.use(loginRout)

app.listen(3000, function(){
    console.log(`App rodando na porta 3000`);
})