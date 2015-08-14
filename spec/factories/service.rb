include ActionDispatch::TestProcess
FactoryGirl.define do
  factory :service do
    image { fixture_file_upload "#{Rails.root}/spec/fixtures/images/test.png", 'image/png' }
    title 'Our Room'
    description 'Come chill out in our society room'
  end
end
