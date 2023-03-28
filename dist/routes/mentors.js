import { Router } from 'express';

import { mentors, mentor } from '../controllers/mentorsController.js';

const router = Router();

router.get('/mentors', mentors);
router.get('/mentors/:mentorId', mentor);

export { router };
