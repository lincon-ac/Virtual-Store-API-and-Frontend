////////////////MÓDULOS /////////////////////
const express = require("express");
const router = express.Router();
//////CONTROLLERS
const usuarioController = require("../controller/usuarioController");
const produtoController = require("../controller/produtoController");
////////////////Requisições HTTP Principal /////////////////////
router.get("/",(req, res) =>{
  return res.json({message: "Sistema de Varejo"});
})
////////////////Requisições HTTP Usuario /////////////////////

//POST - CADASTRAR
router.post("/add_usuario", usuarioController.UsuarioCreate);

//GET - LISTAR
router.get("/usuarios/:id?", usuarioController.verificaJWT,usuarioController.UsuarioListar);

//PUT - UPDATE
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

// DELETE
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

router.post("/login", usuarioController.UsuarioVerificaLogin);



/////////////Requisições Produto

//POST - CADASTRAR
router.post("/add_produtos", produtoController.produtoCreate);

//GET - LISTAR
router.get("/produtos/:id?", produtoController.ProdutoListar);

module.exports = router;