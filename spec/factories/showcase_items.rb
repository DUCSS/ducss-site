FactoryGirl.define do
  factory :showcase_item do
    owner "Brad Pitt"
    link "http://www.github.com/BradPitt"
    title "How I Look So Goddamn Good"
    description "A simple demo and exercise into the tech used by Scientologists to keep me looking so beautiful."
    profile_picture { fixture_file_upload "#{Rails.root}/spec/fixtures/images/profile-pic-test.jpg", 'image/jpg' }
  end

end
