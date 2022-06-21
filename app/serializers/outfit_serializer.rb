class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :temp_f, :humidity_percent, :wind_mph, :cloud, :details, :user_id, :weather_summary
  has_many :item_outfit_joins
  has_many :items, through: :item_outfit_joins
  
end
