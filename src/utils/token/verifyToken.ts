import jwt from 'jsonwebtoken';

import { KEY } from './config.js';

const verifyToken = (verificationToken) => jwt.verify(verificationToken, KEY);

export default verifyToken;
