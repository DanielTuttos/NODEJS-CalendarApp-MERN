/*
    Rutas de usuario / events
    host + /api/events
*/


const express = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');

const router = express.Router();

// todas deben pasar por la validacion del jwtoken
router.use(validarJWT);
// obtener eventos
router.get('/', getEventos);

// crear nuevo evento
router.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),

    validarCampos
], crearEvento);

// Actualizar evento
router.put('/:id', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),

    validarCampos
], actualizarEvento);

// borrar evento
router.delete('/:id', eliminarEvento);


module.exports = router;