FactoryGirl.define do
  factory :event do
    title 'Learn to Code'
    description 'We host our first in our series of coding tutorials'
    slug 'learn-to-code'
    location 'DUCSS Room'
    date { 7.days.from_now }
  end
end
