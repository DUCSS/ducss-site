class Event < ActiveRecord::Base

  has_attached_file :thumbnail, styles: { normal: "851x315"}
  paginates_per 4

  LOWER_HYPHEN_CASE_REGEX = /\A[a-z0-9]+(\-([a-z0-9])+)*\Z/
  validates :title, presence: true, length: { maximum: 128 }
  validates :description, presence: true
  validates :slug, presence: true, uniqueness: true, length: { maximum: 128 }, format: { with: LOWER_HYPHEN_CASE_REGEX }
  validates :location, presence: true, length: { maximum: 128 }
  validates :date, presence: true
  validates :thumbnail, attachment_presence: true
  validates_attachment_content_type :thumbnail, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]


  def self.highlighted
    upcoming.last
  end

  def self.upcoming
    where('date > ?', DateTime.now).order(date: :desc)
  end

  def self.previous
    where('date < ?', DateTime.now).order(date: :desc)
  end

end
