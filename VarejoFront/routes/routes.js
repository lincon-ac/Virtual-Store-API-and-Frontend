const express = require("express");
const Services = require("../services/services");
const router = express.Router();
/*
router.get("/",(req, res) =>{
    res.send("Seja bem Vindo ao nosso sistema de Varejo Virtual.");
});
*/

router.get("/", Services.ProdutoListar);

router.post("/login",Services.UsuarioLogin);
router.get("/login",(req, res) =>{
  res.render("usuarios/login");
})

router.get("/usuarios/Cadastrar",(req, res) =>{
  res.render("usuarios/Cadastrar");
})

router.post("/usuarios/Cadastrar",Services.UsuarioCreate);


////////////PRODUTO

router.get("/produtos/Cadastrar",(req, res) =>{
  res.render("produtos/Cadastrar");
})
router.post("/produtos/Cadastrar",Services.ProdutoCreate);

router.get("/produtos/listar",Services.ProdutoListar);

module.exports=router;
