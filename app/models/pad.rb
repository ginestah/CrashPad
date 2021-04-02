class Pad < ApplicationRecord
  has_many :photos, dependent: :destroy
  has_many :reviews, dependent: :destroy
  belongs_to :user
  accepts_nested_attributes_for :photos, allow_destroy: true
end
