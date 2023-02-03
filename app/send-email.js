var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'riteshsalunke11@gmail.com',
    pass: '**********************'
  }
});

var mailOptions = {
  from: 'riteshsalunke11@gmail.com',
  to: 'riteshsalunke11@gmail.com   ',
  subject: 'nodejs email  ',
  text: `hello ritesh `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});