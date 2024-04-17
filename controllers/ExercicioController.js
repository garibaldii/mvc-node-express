const Alunos = require('../models/Alunos')

exports.alunoWorks = ((req, res) => {
    const alunos = new Alunos()
    res.send(`<h1> ${alunos.taFuncionando()} </h1>`)
}) 


exports.getAlunos = ((req, res) => {
    const alunos = new Alunos()

    res.render("AlunoView.ejs", { alunos: alunos.ListaAlunos })
}
)

exports.addAluno = ((req, res) => {
    const alunos = new Alunos()
    
    res.render("AlunoAddView.ejs");

    const nomeInput = req.body.nome
    const idadeInput = req.body.idade

    alunos.addAluno(nomeInput,idadeInput)

    console.log(alunos.ListaAlunos);
    
})