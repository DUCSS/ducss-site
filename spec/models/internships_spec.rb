require 'rails_helper'

RSpec.describe Internships, type: :model do
  subject { build(:internships) }

  it { is_expected.to validate_presence_of :date }

  describe 'open_internships' do
    let!(:open_internships) { Array.new(3) { create(:internships) } }
    before do
      create(:internships)
    end

    it { is_expected.to match_array previous }
  end
end
