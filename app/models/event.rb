class Event < ActiveRecord::Base
  validates :title, presence: true
  validates :description, presence: true
  validates :slug, presence: true, uniqueness:true
  validates :location, presence: true
  validates :date, presence: true
end
