FactoryGirl.define do
  factory :internships do
    job_title "Software Engineering Intern"
    company_name "DUCSS"
    job_location "Dublin, Ireland"
    apply_link "http://ducss.ie"
    company_logo { fixture_file_upload "#{Rails.root}/spec/fixtures/images/profile-pic-test.jpg", 'image/jpg' }
  end
end
