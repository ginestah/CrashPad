class User < ApplicationRecord
  has_secure_password
  has_many :pads, dependent: :destroy
  has_many :reviews, dependent: :destroy

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {minimum: 7}
  validates :first_name, presence: true
  validates :last_name, presence: true


end
