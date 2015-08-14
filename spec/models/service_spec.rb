require 'rails_helper'

RSpec.describe Service, :type => :model do
  subject { build(:service) }

  it { is_expected.to validate_presence_of :title }
  it { is_expected.to validate_length_of(:title).is_at_most 128 }

  it { is_expected.to validate_presence_of :description }

  it { is_expected.to have_attached_file :image }
  it { is_expected.to validate_attachment_presence :image }
  it { is_expected.to validate_attachment_content_type(:image).
                      allowing 'image/jpg', 'image/jpeg', 'image/png', 'image/gif' }

end
