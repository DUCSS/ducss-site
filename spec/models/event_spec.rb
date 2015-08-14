require 'rails_helper'

RSpec.describe Event, :type => :model do
  subject { build(:event) }

  it { is_expected.to validate_presence_of :title }
  it { is_expected.to validate_length_of(:title).is_at_most 128 }

  it { is_expected.to validate_presence_of :description }

  it { is_expected.to validate_presence_of :slug }
  it { is_expected.to validate_uniqueness_of :slug }

  it { is_expected.to validate_presence_of :location }
  it { is_expected.to validate_length_of(:location).is_at_most 128 }

  it { is_expected.to validate_presence_of(:date) }
end
