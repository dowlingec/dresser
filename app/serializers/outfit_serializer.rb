class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :temp_f, :humidity_percent, :rain_inch, :snow_inch, :wind_mph, :cloud, :details, :user_id

  # Add include for items in outfit once those are working
  
end