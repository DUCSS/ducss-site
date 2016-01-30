require 'rails_helper'

RSpec.describe Event, :type => :model do
  subject { build(:event) }

  it { is_expected.to validate_presence_of :title }
  it { is_expected.to validate_length_of(:title).is_at_most 128 }

  it { is_expected.to validate_presence_of :description }

  it { is_expected.to validate_presence_of :slug }
  it { is_expected.to validate_uniqueness_of :slug }
  it { is_expected.to allow_value('hi-there-gr8-sluggy').for :slug }
  it { is_expected.not_to allow_value('hi-- ther?e-Ar8-sluggy').for :slug }
  it { is_expected.to validate_length_of(:slug).is_at_most 128 }

  it { is_expected.to validate_presence_of :location }
  it { is_expected.to validate_length_of(:location).is_at_most 128 }

  it { is_expected.to validate_presence_of(:date) }

  it { is_expected.to have_attached_file :thumbnail }
  it { is_expected.to validate_attachment_presence :thumbnail }
  it { is_expected.to validate_attachment_content_type(:thumbnail).
                      allowing 'image/jpg', 'image/jpeg', 'image/png', 'image/gif' }

  describe 'upcoming events' do
    let!(:upcoming) { Array.new(3) { create(:event) } }
    before do
      create(:event, date: 7.days.ago)
    end

    subject { Event.upcoming }

    it { is_expected.to match_array upcoming }
  end

  describe 'previous events' do
    let!(:previous) { Array.new(3) { create(:event, date: 7.days.ago) } }
    before do
      create(:event)
    end

    subject { Event.previous }

    it { is_expected.to match_array previous }
  end

  describe 'highlighted event' do
    subject { Event.highlighted }

    context 'when there are future events' do
      let!(:events) { Array.new(3) { create(:event, date: 5.days.from_now)} << create(:event, date: 1.days.from_now)}
      it { is_expected.to match(events.last) }
    end

    context 'when there are no future events' do
      before do
        Array.new(3) { create(:event, date: 3.days.ago) }
      end
      it { is_expected.to be_nil }
    end
  end
end
