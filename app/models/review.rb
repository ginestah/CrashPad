class Review < ApplicationRecord
  belongs_to :pad
  belongs_to :user
end
