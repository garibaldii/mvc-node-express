const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')
const ExercicioController = require('../controllers/ExercicioController');



router.get("/login", loginController.getLogin)


router.get("/logged", loginController.getLogged)


router.get("/alunos", ExercicioController.alunoWorks)

router.get("/alunos/getAll", ExercicioController.getAlunos)

router.post("/alunos/save", ExercicioController.addAluno)


module.exports = router

//NÃO PODE SER A MEMSA ROTA, UMA PARA FORM E OUTRA PARA POST