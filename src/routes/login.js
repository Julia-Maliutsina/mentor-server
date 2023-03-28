import { Router } from 'express';

import { logIn } from '../controllers/logInController.js';

const router = Router();

router.post('/login', logIn);

export { router };
