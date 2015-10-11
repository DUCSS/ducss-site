require 'rails_helper'

RSpec.describe Book, type: :model do
  it { is_expected.to validate_presence_of :title }
  it { is_expected.to validate_length_of(:title).is_at_most 128 }

  it { is_expected.to validate_presence_of :author }
  it { is_expected.to validate_length_of(:author).is_at_most 128 }

  it { is_expected.to validate_presence_of :synopsis }

  it { is_expected.to validate_presence_of :image_url }
  it { is_expected.to allow_value('https://someimage.thing.come/images').for :image_url }
  it { is_expected.not_to allow_value('agr@asdasd').for :image_url }

end
