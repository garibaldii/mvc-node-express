const loginModel = require('../models/loginModel')

exports.getLogin =

    ((req, res) => {

        /*

    #swagger.tag = ['Login']
    #swagger.description = 'Mostra Mensagem Logado'
    #swagger.summary = 'Chama função = is logged'

    */

        const login = new loginModel()
        res.send(`<h1> ${login.isLogged()} </h1>`)
    })

exports.getLogged =


    ((req, res) => {
        //#swagger.ignore = true
        const login = new loginModel()
        const logged = login.isLogged()
        res.render("LoginView.ejs", { logged: logged })
    })


exports.createUser =


    ((req, res) => {

        const { email, password } = req.body
        res.status(200).json(`User added sucessfully! 🎉`)


    })

exports.getById = ((req, res) => {

    const filter = req.query.filter
    const version = req.headers.version
    res.status(200).json(`Getting user... 💻`)

})


 
