require("dotenv").config();
var postmark = require("postmark");
const serverToken = process.env.POSTMARK_API_TOKEN;
const client = new postmark.ServerClient(serverToken);

exports.handler = async function(e) {
  const body = JSON.parse(`${e.body}`)
  const submit = await client.sendEmailWithTemplate({
    "From": process.env.POSTMARK_ORIGIN_EMAIL,
    "To": process.env.POSTMARK_DESTINATION_EMAIL,
    "ReplyTo": body.email,
    "TemplateAlias": "contact-form-submission",
    "TemplateModel": body
    }).then(function(res) {
      return res
    }, function(err) {
      return err
    });
    if(submit.ErrorCode === 0){
      return { "statusCode": 200, "body": 'Success' }
    }
}