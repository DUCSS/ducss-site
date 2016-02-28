class ShowcaseItem < ActiveRecord::Base
  belongs_to :showcase
  has_attached_file :profile_picture, styles: { normal: "315x315"}

  URL_VALIDATION_REGEX = /\A(?:(?:https?|ftp):\/\/)(?:\S+(?::\S)?@)?(?:(?!10(?:.\d{1,3}){3})(?!127(?:.\d{1,3}){3})(?!169.254(?:.\d{1,3}){2})(?!192.168(?:.\d{1,3}){2})(?!172.(?:1[6-9]|2\d|3[0-1])(?:.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)[a-z\u00a1-\uffff0-9]+)(?:.(?:[a-z\u00a1-\uffff0-9]+-?)[a-z\u00a1-\uffff0-9]+)(?:.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?\z/i
  validates :owner, presence: true, length: { maximum: 20 }
  validates :link, presence: true, length: { maximum: 128 }, format: { with: URL_VALIDATION_REGEX }
  validates :title, presence: true, length: { maximum: 128 }
  validates :description, presence: true
  validates :profile_picture, attachment_presence: true
  validates_attachment_content_type :profile_picture, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end