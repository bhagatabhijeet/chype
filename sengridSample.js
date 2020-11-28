require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  //to:'bhagat.abhijeet@gmail.com',
  // to:'setaremehr89@gmail.com',
  to: 'mariomacias29@gmail.com',
  from: 'chypeteam@gmail.com', // Use the email address or domain you verified above
  subject: 'Test Email From Chype Team',
  text: 'TEST EMAIL FROM CHYPE TEAM',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
 
    if (error.response) {
      console.error(error.response.body)
    }
  }
})();