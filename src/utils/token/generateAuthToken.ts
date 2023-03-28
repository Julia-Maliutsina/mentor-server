import jwt from 'jsonwebtoken';

import { KEY } from './config.js';

const generateToken = (id: number, role: number) => {
  const payload = { id, role };
  return jwt.sign(payload, KEY, { expiresIn: '10 days' });
};

export default generateToken;
