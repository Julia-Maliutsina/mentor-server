import logInService from '../services/logIn.service.js';

const logIn = async (request, response) => {
  try {
    const { email, password } = request.body;
    const login = await logInService.login({ email, password });

    if (login.status === 'error') {
      return response.status(400).send({ message: login.message });
    }
    response
      .status(200)
      .cookie('session_token', login.sessionToken, { expires: login.expiresAt, secure: true })
      .send({ user: login.userInfo });
    return;
  } catch (e) {
    console.log(e);
  }
};

export { logIn };
