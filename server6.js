//incorporar respostas a partir de outros arquivos 

const express = require('./functions.js');
const app = express();

app.listen(3000,()=>{
    console.log("servidor na área brow")
})
const funcoes=require('./functions.js')
app.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b =parseInt(req.params.b);
    const resultado = funcoes.add(a,b)
    res.send(`A soma de ${a} e ${b} é igual a ${resultado}`)
})
app.get('/mult/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b =parseInt(req.params.b);
    const resultado = funcoes.mult(a,b)
    res.send(`A mult de ${a} e ${b} é igual a ${resultado}`)
})
app.get('/div/:a/:b',(req,res)=>{
    const a =parseInt(req.params.a);
    const b =parseInt(req.params.b);
    const resultado = funcoes.div(a,b)
    res.send(`A divisão de ${a} e ${b} é igual a ${resultado}`)
})