class Book < ActiveRecord::Base
  URL_REGEX = URI.regexp
  validates :title, presence: true, length: { maximum: 128 }
  validates :author, presence: true, length: { maximum: 128 }
  validates :synopsis, presence: true
  validates :image_url, presence: true, format: { with: URL_REGEX }
end
