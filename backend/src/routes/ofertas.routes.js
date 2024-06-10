import { Router } from 'express';
import { validarRegistrarOfertas } from '../validations/ofertas.validacion.js';
import { verificarUserToken } from '../controllers/autenticacionController.js';
<<<<<<< HEAD
import { listarOfertas, guardarOfertas, buscarOferta, atualizarOfertas, eliminarOferta, buscarOfertaMayor } from '../controllers/ofertas.Controller.js';
=======
import { listarOfertas, guardarOfertas, buscarOferta, atualizarOfertas, eliminarOferta } from '../controllers/ofertas.Controller.js';
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55

const ofertasRoutes = Router();

ofertasRoutes.post('/oferta', verificarUserToken, validarRegistrarOfertas, guardarOfertas);
ofertasRoutes.get('/oferta', verificarUserToken, listarOfertas);
ofertasRoutes.put('/oferta/:id', verificarUserToken, atualizarOfertas);
ofertasRoutes.get('/oferta/:id', verificarUserToken, buscarOferta);
<<<<<<< HEAD
ofertasRoutes.get('/ofertamayor/:id', verificarUserToken, buscarOfertaMayor);
ofertasRoutes.delete('/oferta/:id/:user', verificarUserToken, eliminarOferta);
=======
ofertasRoutes.delete('/oferta/:id', verificarUserToken, eliminarOferta);
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55

export default ofertasRoutes;
