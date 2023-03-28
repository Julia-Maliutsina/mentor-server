import { Router } from 'express';

import { signUp, validateSignUpEmail } from '../controllers/signUpController.js';

const router = Router();

router.post('/signup', signUp);
router.post('/validate-email', validateSignUpEmail);

export { router };
