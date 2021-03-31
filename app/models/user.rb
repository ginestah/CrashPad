class User < ApplicationRecord
  has_secure_password
  has_many :pads
  has_many :reviews

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 7}

end
