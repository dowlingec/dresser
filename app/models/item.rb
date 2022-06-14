class Item < ApplicationRecord
  belongs_to :user
  has_many :outfits
  has_one_attached :image

  validates :item_type, inclusion: {
    in: %w(headwear eyewear neckwear top bottom one_piece hosiery shoes),
    message: "%{value} is not a valid item type"
  }

  validates :occasion, inclusion: {
    in: %w(casual formal sporty party),
    message: "%{value} is not a valid occasion category"
  }

  # validates :color, inclusion: {
  #   in: %w(),
  #   message: "%{value} is not a valid item type"
  # }

end
