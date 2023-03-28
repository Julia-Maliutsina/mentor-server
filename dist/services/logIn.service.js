import bcrypt from 'bcryptjs';

import User from '../db/models/user.ts';
import generateToken from '../utils/token/generateAuthToken.ts';
import ROLES from '../constants/roles.ts';

const login = async ({ email, password }) => {
  if (!email || !password) {
    return { status: 'error', message: 'Неверные параметры' };
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return { status: 'error', message: 'Пользователь с данным e-mail не зарегистрирован' };
  }
  if (!user.email_verified) {
    return { status: 'error', message: 'Регистрация не завершена' };
  }

  const validPassword = bcrypt.compare(password, user.password);
  if (!validPassword) {
    return { status: 'error', message: 'Неверный пароль' };
  }

  const sessionToken = generateToken(user.id, user.role);
  const now = new Date();
  const expiresAt = new Date(+now + 240 * 60 * 60 * 1000);
  user.set({
    cookie: sessionToken,
    cookie_expires_at: expiresAt,
  });
  await user.save();

  const role =
    user.role === ROLES.MENTEE.id
      ? ROLES.MENTEE.name
      : user.role === ROLES.MENTOR.id
      ? ROLES.MENTOR.name
      : ROLES.ADMIN.name;

  const userInfo = {
    email: user.email,
    name: user.name,
    lastName: user.last_name,
    role: role,
  };

  return { status: 'ok', userInfo, sessionToken, expiresAt };
};

const logInService = { login };

export default logInService;
