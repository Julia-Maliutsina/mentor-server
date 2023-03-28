import jwt from 'jsonwebtoken';

import { KEY } from './config.js';

const generateRegistrationToken = (email: string, role: number) => {
  const payload = { email, role };
  return jwt.sign(payload, KEY, { expiresIn: '3 days' });
};

export default generateRegistrationToken;
