class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :temp_f, :humidity_percent, :rain_inch, :snow_inch, :wind_mph, :cloud, :details, :user_id
  has_many :item_outfit_joins
  has_many :items, through: :item_outfit_joins

  # Add include for items in outfit once those are working
  
end
