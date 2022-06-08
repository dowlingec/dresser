class Outfit < ApplicationRecord
    belongs_to :user
    has_many :item_outfit_joins
    has_many :items, through: :item_outfit_joins
end
