import express from 'express';
import {login, logout, register, auth} from '../controllers/authenticationController.js'
import * as model from '../models/model.js'

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

router.get('/auth', auth);



export default router