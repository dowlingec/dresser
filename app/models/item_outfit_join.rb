class ItemOutfitJoin < ApplicationRecord
    belongs_to :outfit
    belongs_to :item
end
