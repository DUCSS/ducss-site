class User < ActiveRecord::Base
  devise :database_authenticatable, :validatable
  validates_presence_of :password_confirmation, if: lambda { !password.nil? }
end
