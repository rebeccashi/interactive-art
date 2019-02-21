const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'xs938@nyu.edu',
  from: 'rebeccaxiaoyishi@gmail.com',
  subject: 'sjdfkl ajskl fj',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
