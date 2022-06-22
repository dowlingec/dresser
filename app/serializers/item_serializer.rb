class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :item_type, :name, :color, :occasion, :user_id, :image

  has_many :item_outfit_joins
  has_many :outfits, through: :item_outfit_joins

  def image
    if object.image.attached?
      {
        url: rails_blob_url(object.image)
      }
    end
  end
end
