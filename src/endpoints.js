 import { dobro, somar } from './services.js'

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

 server.post('/media' , (req, resp) => {
     try {
         const { valores: {n1, n2, n3}} = req.body;

        let f = media (n1, n2, n3);

         resp.send({
             media: f
         })
     } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
 })


 export default server;