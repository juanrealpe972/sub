import { Router } from 'express';
import { validarOfertas } from '../validations/ofertas.validacion.js';
import { verificarUserToken } from '../controllers/autenticacionController.js';
import { listarOfertas, guardarOfertas, buscarOferta, atualizarOfertas, eliminarOferta, buscarOfertaMayor } from '../controllers/ofertas.Controller.js';

const ofertasRoutes = Router();

ofertasRoutes.post('/oferta', verificarUserToken, validarOfertas, guardarOfertas);
ofertasRoutes.get('/oferta', verificarUserToken, listarOfertas);
ofertasRoutes.put('/oferta/:id', verificarUserToken, validarOfertas, atualizarOfertas);
ofertasRoutes.get('/oferta/:id', verificarUserToken, buscarOferta);
ofertasRoutes.get('/ofertamayor/:id', verificarUserToken, buscarOfertaMayor);
ofertasRoutes.delete('/oferta/:id/:user', verificarUserToken, eliminarOferta);

export default ofertasRoutes;
