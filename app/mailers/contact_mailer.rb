class ContactMailer < ActionMailer::Base
  default from: '"DUCSS Site" <ducss@csc.tcd.ie>'

  def contact_email(message)
    @body = ActionView::Base.full_sanitizer.sanitize message.body
    mail(to: "ducss@csc.tcd.ie", subject: "DUCSS site email from #{message.name}",
        from: "\"#{message.name}\" <#{message.email}>", reply_to: message.email)
  end
end
