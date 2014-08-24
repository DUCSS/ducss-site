class User < ActiveRecord::Base
  devise :database_authenticatable

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, confirmation: true, if: lambda { new_record? || !password.nil? }
end
