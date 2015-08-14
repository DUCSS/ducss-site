FactoryGirl.define do
  factory :message do
    skip_create

    name 'Irwin Garry'
    email 'example@example.com'
    body 'Sample email message'
  end
end
