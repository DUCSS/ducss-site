require 'rails_helper'

RSpec.describe Message, :type => :model do
  subject { build(:message) }

  it { is_expected.to validate_presence_of :name }
  it { is_expected.to validate_length_of(:name).is_at_most 100 }

  it { is_expected.to allow_value('example@example.com').for :email }
  it { is_expected.not_to allow_value('test@test').for :email }

  it { is_expected.to validate_presence_of :body }
  it { is_expected.to validate_length_of(:body).is_at_most 3000 }
end
