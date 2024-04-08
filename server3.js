//colocando parâmetros nas rotas
const express=require('express');

const app = express();

app.listen(3000,()=>{
    console.log("Servifor em execução");
})

//rotas
app.get('/',(req,res)=>{
    res.send("teste1");
})

//rota com um parâmetro 
app.get('/ola/:nome',(req,res)=>{
    res.send("teste2, tudo bem "+req.params.nome+"?");
})

//rota com dois parâmetro 
app.get('/ola/:nome:empresa',(req,res)=>{
    res.send("teste3, tudo bem "+req.params.nome+"da empresa" +req.params.empresa);
})

//rota com soma de dois parâmetros
app.get('/soma/:a/b',()=>{
    res.send("resultado da soma é: "+(parseInt(req.params.a)+parseint))
})
