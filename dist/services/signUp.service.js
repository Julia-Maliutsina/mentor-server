import bcrypt from 'bcryptjs';

import User from '../db/models/user.ts';
import Mentee from '../db/models/mentee.ts';
import Mentor from '../db/models/mentor.ts';
import ROLES from '../constants/roles.ts';
import validateSignUpData from '../utils/validation/signUp.ts';
import generateToken from '../utils/token/generateAuthToken.ts';
import generateRegistrationToken from '../utils/token/generateRegToken.ts';
import verifyToken from '../utils/token/verifyToken.ts';
import sendVerificationEmail from '../nodemailer.js';

const signup = async ({ email, password, name, lastName, role }) => {
  if (!email || !password || !name || !lastName || !role) {
    return { status: 'error', message: 'Неверные параметры' };
  }

  const user = await User.findOne({ where: { email } });
  if (user) {
    return { status: 'error', message: 'Данный e-mail уже используется' };
  }

  const userDataCheck = validateSignUpData(email, password, name, lastName, role);
  if (!userDataCheck.valid) {
    return { status: 'error', message: userDataCheck.message };
  }

  const roleId =
    role === ROLES.ADMIN.name
      ? ROLES.ADMIN.id
      : role === ROLES.MENTEE.name
      ? ROLES.MENTEE.id
      : ROLES.MENTOR.id;

  const registrationToken = generateRegistrationToken(email, roleId);
  const encryptedPassword = await bcrypt.hash(password, 8);
  const newUser = await User.create({
    email: email,
    password: encryptedPassword,
    name: name,
    last_name: lastName,
    role: roleId,
    email_verification_token: registrationToken,
  });
  const responseData = { email, name, lastName, role };
  let mail = await sendVerificationEmail(email, registrationToken);
  return { status: 'ok', responseData };
};

const validateEmail = async ({ verificationToken }) => {
  const decodedToken = verifyToken(verificationToken);
  const user = await User.findOne({ where: { email: decodedToken.email } });
  if (user.email_verification_token === verificationToken) {
    const sessionToken = generateToken(user.id, decodedToken.role);
    const now = new Date();
    const expiresAt = new Date(+now + 240 * 60 * 60 * 1000);
    user.set({
      email_verification_token: null,
      email_verified: true,
      cookie: sessionToken,
      cookie_expires_at: expiresAt,
    });
    await user.save();
    let role = '';
    if (decodedToken.role === ROLES.MENTEE.id) {
      const mentee = await Mentee.create({
        user_id: user.id,
      });
      role = ROLES.MENTEE.name;
    } else if (decodedToken.role === ROLES.MENTOR.id) {
      const mentor = await Mentor.create({
        user_id: user.id,
      });
      role = ROLES.MENTOR.name;
    }
    const userInfo = {
      email: user.email,
      name: user.name,
      lastName: user.last_name,
      role: role,
    };
    return { status: 'ok', userInfo, sessionToken, expiresAt };
  } else {
    return { status: 'error', message: 'Неверный токен' };
  }
};

const signUpService = { signup, validateEmail };

export default signUpService;
