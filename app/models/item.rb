class Item < ApplicationRecord
  belongs_to :user
  has_many :outfits
  has_one_attached :image
end
