class ContactMailer < ActionMailer::Base
  default from: '"DUCSS Site" <ducss@csc.tcd.ie>'
  default to: '"DUCSS" <ducss@csc.tcd.ie>'

  def contact_email(message)
    @body = message.body
    mail(subject: "DUCSS site email from #{message.name}",
        from: "\"#{message.name}\" <#{message.email}>", reply_to: message.email)
  end
end
