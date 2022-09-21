import { ServerClient } from 'postmark'

export default function handler(req) {

  const serverToken = process.env.POSTMARK_API_TOKEN;
  const client = new ServerClient(serverToken);

  const send = async () => {
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
        console.log(res)
      }, function(err) {
        console.log(err)
      });
    }
  
    send()
  
  }