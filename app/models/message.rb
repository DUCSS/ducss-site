class Message
  include ActiveModel::Model
  include ActiveModel::Conversion
  include ActiveModel::Validations

  # Use a tableless model for validating email messages but not persisting them to the database

  attr_accessor :name, :email, :body

  EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(?:\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :name, presence: true, length: { maximum: 100 }
  validates :email, format: { with: EMAIL_REGEX }, length: { maximum: 200 }
  validates :body, presence: true, length: { maximum: 3000 }
end
