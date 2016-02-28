require 'rails_helper'

RSpec.describe ShowcaseItem, type: :model do
  subject { build(:showcase_item) }

  it { is_expected.to validate_presence_of :title }
  it { is_expected.to validate_length_of(:title).is_at_most 128 }

  it { is_expected.to validate_presence_of :owner }
  it { is_expected.to validate_length_of(:owner).is_at_most 20 }

  it { is_expected.to validate_presence_of :link }
  it { is_expected.to validate_length_of(:link).is_at_most 128 }
  it { is_expected.to allow_value('http://www.github.com').for :link }
  it { is_expected.not_to allow_value('http://0.0.0.0').for :link }
  it { is_expected.not_to allow_value('http://foo.bar/?q=Test%20URL-encoded %20stuff').for :link }
  it { is_expected.not_to allow_value('hello.com').for :link }

  it { is_expected.to validate_presence_of :description }

  it { is_expected.to have_attached_file :profile_picture }
  it { is_expected.to validate_attachment_presence :profile_picture }
  it { is_expected.to validate_attachment_content_type(:profile_picture).
                      allowing 'image/jpg', 'image/jpeg', 'image/png', 'image/gif' }
end
