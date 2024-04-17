module.exports =

    class Alunos {
        constructor() {};

        
        ListaAlunos = [
            {
                'nome': 'Daniela',
                'idade': 17
            },
            {
                'nome': 'João',
                'idade': 21
            },
            {
                'nome': 'Pedro',
                'idade': 25
            },

        ]


        taFuncionando(){
            return `Aluno Works!`
        }

        addAluno(nome, idade){
            const aluno = {
                nome: nome,
                idade: idade
            }
            this.ListaAlunos.push(aluno)

        }
    }