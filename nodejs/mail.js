var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nitish.mishra1@religare.com',
    pass: 'Religare@123'
  }
});

var mailOptions = {
  from: 'nitish.mishra1@religare.com',
  to: 'nitishmishra7359@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});