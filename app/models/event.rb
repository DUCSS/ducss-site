class Event < ActiveRecord::Base

  LOWER_HYPHEN_CASE_REGEX = /\A[a-z0-9]+(\-([a-z0-9])+)*\Z/
  validates :title, presence: true, length: { maximum: 128 }
  validates :description, presence: true
  validates :slug, presence: true, uniqueness: true, length: { maximum: 128 }, format: { with: LOWER_HYPHEN_CASE_REGEX }
  validates :location, presence: true, length: { maximum: 128 }
  validates :date, presence: true

  def self.upcoming
    where('date > ?', DateTime.now).order(date: :desc)
  end

  def self.previous
    where('date < ?', DateTime.now).order(date: :desc)
  end

end
