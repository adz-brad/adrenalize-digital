require("dotenv").config();
var postmark = require("postmark");
const serverToken = process.env.POSTMARK_API_TOKEN;
const client = new postmark.ServerClient(serverToken);

exports.handler = async function(req) {
  console.log(req)
  await client.sendEmail({
    "From": process.env.POSTMARK_SENDER_EMAIL,
    "To": req.body.email,
    "Subject": "New Contact Form Submission",
    "HtmlBody": `
      ${req.body.name}
      ${req.body.email}
      ${req.body.location}
      ${req.body.type}
      ${req.body.message}
    `
  }).then(function(res) {
      console.log('Function Response:', res)
    }, function(err) {
      console.log('Function Error:', err)
    });
}