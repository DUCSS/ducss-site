class Service < ActiveRecord::Base
  has_attached_file :image, styles: { normal: "350x350" }
  validates :title, presence: true
  validates :description, presence: true
  validates :image, attachment_presence: true
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
