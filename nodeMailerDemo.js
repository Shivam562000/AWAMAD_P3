var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shivam.chougule@walchandsangli.ac.in',
    pass: 'BqOXHZdi'
  }
});

var mailOptions = {
  from: 'shivam.chougule@walchandsangli.ac.in',
  to: 'shivam.chougule@walchandsangli.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'Shivam Chougule 2018BTECS00112' 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});