import signUpService from '../services/signUp.service.js';

const signUp = async (request, response) => {
  try {
    const { email, password, name, lastName, role } = request.body;
    const signup = await signUpService.signup({ email, password, name, lastName, role });

    if (signup.status === 'error') {
      return response.status(400).send({ message: signup.message });
    }
    response.status(200).send({ user: signup.responseData });
    return;
  } catch (e) {
    console.log(e);
  }
};

const validateSignUpEmail = async (request, response) => {
  try {
    const { verificationToken } = request.body;
    const validEmail = await signUpService.validateEmail({ verificationToken });
    if (validEmail.status === 'error') {
      return response.status(400).send({ message: validEmail.message });
    }
    response
      .status(200)
      .cookie('session_token', validEmail.sessionToken, { expires: validEmail.expiresAt })
      .send({ user: validEmail.userInfo });
    return;
  } catch (e) {
    console.log(e);
  }
};

export { signUp, validateSignUpEmail };
