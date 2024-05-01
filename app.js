const express = require('express')
const app = express()

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const bodyParser = require('body-parser')

const loginRout = require('./routes/LoginRoute')


//MiddleWares
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.set('view engine', 'ejs')
app.set('views', './views/login')



app.use(loginRout)




app.listen(3000, function(){
    console.log(`App rodando na porta 3000`);
})