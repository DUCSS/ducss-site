require 'rails_helper'

RSpec.describe Showcase, type: :model do
  subject { build(:showcase) }

  it { is_expected.to validate_presence_of :date }

  describe 'upcoming showcases' do
    let!(:upcoming) { Array.new(3) { create(:showcase) } }
    before do
      create(:showcase, date: 7.days.ago)
    end

    subject { Showcase.upcoming }

    it { is_expected.to match_array upcoming }
  end

  describe 'previous showcases' do
    let!(:previous) { Array.new(3) { create(:showcase, date: 7.days.ago) } }
    before do
      create(:showcase)
    end

    subject { Showcase.previous }

    it { is_expected.to match_array previous }
  end
end
