require 'rails_helper'

def fill_in_form(message)
  fill_in 'Name', with: message.name
  fill_in 'Email', with: message.email
  fill_in 'Body', with: message.body
end

RSpec.feature 'Email form' do
  given(:message) { build(:message) }
  scenario 'Valid email parameters' do
    visit root_path
    click_link 'Contact Us'
    fill_in_form(message)
    click_button 'Send'
    expect(page).to have_content 'Email sent'
  end

  given(:invalid_message) { build(:message, email: 'blah') }
  scenario 'Invalid email parameters' do
    visit root_path
    click_link 'Contact Us'
    fill_in_form(invalid_message)
    click_button 'Send'
    expect(page).to have_content 'prevented your email from being sent:'
  end
end
