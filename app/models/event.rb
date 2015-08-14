class Event < ActiveRecord::Base
  validates :title, presence: true, length: { maximum: 128 }
  validates :description, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :location, presence: true, length: { maximum: 128 }
  validates :date, presence: true
end
