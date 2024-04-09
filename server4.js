// escrita simples com parâmetros

    const express = require('express');
    const app = express();
    app.listen(3000,()=>{
        console.log("Servidor em execução");
    })
    //dados dos clientes
    const clientes = [
        {id:1, nome: "Altamiro", telefone: '111111111', email: 'alta@gmail.com'},
        {id:2, nome: "Luiz", telefone: '222222222', email: 'luiz@gmail.com'},
        {id:3, nome: "Cauan", telefone: '333333333', email: 'cauan@gmail.com'},
        {id:4, nome: "Levi", telefone: '444444444', email: 'levi@gmail.com'},
        {id:5, nome: "Enzo", telefone: '555555555', email: 'enzo@gmail.com'}
    ]

    //rotas
    app.get('/',(req,res)=>{
        res.send("API de clientes");
    })
    // rota com o ttal de clientes
    app.get('/total_clientes', (req,res)=>{
    res.send("O total de clientes: "+clientes.length);
})

//rota para apresentar os dados de um cliente específico

app.get('/clientes/:id',(req,res)=>{
    const cliente = clientes.find(c=>c.id===parseInt(req.params.id));

    //se não existir o cliente
    if(!cliente) res.status(404).send('Cliente não encontrado');

    //o cliente existe, vamos aprsentar as informações dele em uma frase
    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.telefone}, email: ${cliente.email}`)
})
