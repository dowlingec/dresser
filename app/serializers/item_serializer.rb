class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :item_type, :name, :color, :occasion, :user_id, :image

  def image
    if object.image.attached?
      {
        url: rails_blob_url(object.image)
      }
    end
  end
end
