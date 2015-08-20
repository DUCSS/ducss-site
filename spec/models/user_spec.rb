require 'rails_helper'

RSpec.describe User, :type => :model do
  subject { build(:user) }

  it { is_expected.to validate_uniqueness_of :email }

  context 'if password is not present' do
    before { subject.password = nil }
    it { is_expected.not_to validate_presence_of :password_confirmation }
  end

  context 'if password is present' do
    before { subject.password = 'hunter22' }
    it { is_expected.to validate_presence_of :password_confirmation }
  end
end
