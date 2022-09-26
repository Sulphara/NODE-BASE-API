import { Router } from 'express';
import * as ApiController from '../controller/apiController'

export const router = Router();


router.post('/frases', ApiController.createPhrase);
router.get('/frases', ApiController.listPhrase);
router.get('/frase/:id', ApiController.getPhrase);
router.put('/frase/:id', ApiController.updatePhrase);
router.delete('/frase/:id', ApiController.deletePhrase);


