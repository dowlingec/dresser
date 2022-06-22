class ItemOutfitJoinSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :outfit_id

  belongs_to :item
  belongs_to :outfit
end
