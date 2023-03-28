import ROLES from '../../constants/roles.js';

const validateSignUpData = (
  email: string,
  password: string,
  name: string,
  lastName: string,
  role: string,
): {
  valid: boolean;
  message?: string;
} => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return { valid: false, message: 'Некорректный e-mail' };
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(?!.*\s).{8,20}$/.test(password)) {
    return { valid: false, message: 'Некорректный пароль' };
  }
  if (name.length < 2) {
    return { valid: false, message: 'Некорректное имя' };
  }
  if (lastName.length < 2) {
    return { valid: false, message: 'Некорректная фамилия' };
  }
  if (!(role in ROLES)) {
    return { valid: false, message: 'Некорректная роль пользователя' };
  }
  return { valid: true };
};

export default validateSignUpData;
