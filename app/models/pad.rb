class Pad < ApplicationRecord
  has_many :photos, dependent: :destroy
  has_many :reviews
  belongs_to :user
  accepts_nested_attributes_for :photos
end
