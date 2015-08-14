require 'rails_helper'

RSpec.describe ContactMailer, :type => :mailer do
  let(:message) { build(:message) }
  let(:mail) { ContactMailer.contact_email(message) }

  it 'should have the correct subject' do
    expect(mail).to have_subject "DUCSS site email from #{message.name}"
  end

  it 'should have the correct sender address' do
    expect(mail).to be_delivered_from "\"#{message.name}\" <#{message.email}>"
  end

  it 'should deliver to the correct address' do
    expect(mail).to be_delivered_to '"DUCSS" <ducss@csc.tcd.ie>'
  end

  it 'should reply to the correct address' do
    expect(mail).to reply_to message.email
  end

  it 'should have the correct body text' do
    expect(mail).to have_body_text message.body
  end

  let(:unsafe_message) { build(:message, body: '<script>Hi</script> there') }
  let(:stripped_mail) { ContactMailer.contact_email(unsafe_message) }
  it 'should strip html tags from the body' do
    expect(stripped_mail).to have_body_text ' there'
  end
end
