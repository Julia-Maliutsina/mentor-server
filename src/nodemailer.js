import nodemailer from 'nodemailer';

import EjsTemplateParser from './email-templates/templates/EjsTemplateParser.js';

const sendVerificationEmail = async (email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const emailTemplateParser = new EjsTemplateParser();
    const data = {
      title: 'Добро пожаловать в Teach Me Mentor!',
      message:
        'Пожалуйста, активируйте аккаунт, чтобы завершить регистрацию. Данная ссылка активна в течение 3 дней с момента регистрации.',
      link: `${process.env.FRONT_HOST}/verify-signup?token=${token}`,
    };
    const templateView = 'testView.ejs';
    const mail = await emailTemplateParser.parse({ templateView, data });
    const info = await transporter.sendMail({
      from: '"Teach Me Mentor" <info@oxy-group.ru>',
      to: email,
      subject: 'Test',
      html: mail,
    });
    console.log('Message sent:', info.messageId);
  } catch (e) {
    console.log(e);
  }
};

export default sendVerificationEmail;
