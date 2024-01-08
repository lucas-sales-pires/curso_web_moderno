const porta = 3003
const express = require("express")
const app = express()
const bancoDeDados = require("./bancoDeDados")
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/produtos",(req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
})
app.get("/produtos/:id",(req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });

    if (produto) {
        res.status(201).send(produto);
    } else {
        res.status(500).send("Erro ao salvar o produto.");
    }
});
app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id:req.params.id
    });

    if (produto) {
        res.status(201).send(produto);
    } else {
        res.status(500).send("Erro ao atualizar o produto.");
    }
})
app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);

    if (produto) {
        res.status(201).send(produto);
    } else {
        res.status(500).send("Erro ao deletar o produto.");
    }
})

app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})




