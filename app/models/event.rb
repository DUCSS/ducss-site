class Event < ActiveRecord::Base
  validates :title, presence: true, length: { maximum: 128 }
  validates :description, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :location, presence: true, length: { maximum: 128 }
  validates :date, presence: true

  def self.upcoming
    where('date > ?', DateTime.now).order(date: :desc)
  end

  def self.previous
    where('date < ?', DateTime.now).order(date: :desc)
  end

end
