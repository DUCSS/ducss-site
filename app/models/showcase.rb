class Showcase < ActiveRecord::Base
  has_many :showcase_items

  validates :date, presence: true

  def self.upcoming
    where('date > ?', DateTime.now).order(date: :desc)
  end

  def self.previous
    where('date < ?', DateTime.now).order(date: :desc)
  end
end
