 import { dobro, somar, media, temperatura, corPrimaria, ingressoCinema, freqCaracter, maiorNumero } from './services.js'

 import { Router } from 'express'

 const server = Router();

 server.get('/ping', (req, resp) => {
     resp.send('pong');
 })

 server.get('/dobro/:numero' , (req, resp) => {
     try {
        const numero = Number (req.params.numero);

        const a = dobro(numero);

        resp.send({
         dobro: a
     }) 
     
     }catch(err) {
         resp.status(404).send({
             erro: err.message
         })
     }
   
 })

 server.get('/somar' , (req, resp) =>{
     try {

         const a = Number(req.query.a);
         const b = Number(req.query.b)

         const f = somar(a, b);

         resp.send({
             somar: f
         })
     } catch (err) {
         resp.status(404).send({
             erro: err.message
         })
     }
 })

server.post('/somar', (req,resp ) => {
    try {
        const {a,b} = req.body;

        const x = somar(a, b);

         resp.send({
            somar:x
         })

    }catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


 server.post('/media', (req, resp) => {
     try {
         const {n1, n2, n3} = req.body;

         const a = media (n1, n2, n3);

         resp.send({
             media: a
         })
     } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
 })

 server.get('/temperatura' , (req, resp) =>{
    try {

        const {a} = req.query;

        const febre = temperatura(a);

        resp.send({
            temperatura: febre
        })
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/corPrimaria/:cor' , (req, resp) => {
    try {

        const cor = (req.params.cor);

        const x= corPrimaria(cor);

        resp.send({
          Primaria: x
        })

    }catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.post('/dia2/ingressoCinema', (req, resp) => {
    try {
        const  {qtdInteira, qtdMeia, diadaSemana, nacionalidade} = req.body;

        const total = ingressoCinema (qtdInteira, qtdMeia, diadaSemana, nacionalidade);

        resp.send({
            total: total
        })
    } catch (err) {
       resp.status(404).send({
           erro: err.message
       })
   }
})

server.get('/dia2/frequecia/:texto/:caracter', (req,resp) => {
    try{

        const {texto,caracter} = req.params;

        const letra = freqCaracter (texto, caracter);

        resp.send({ 
             frequencia: letra
        })

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/dia2/maiorNumero', (req,resp) => {
    try{
       const numeros = req.body;
 
       const maior = maiorNumero(numeros);
 
       resp.send({
           maior: maior
        })
 
     } catch (err) {
         resp.status(404).send({
             erro: err.message
         })
     }
 
 })



 export default server;