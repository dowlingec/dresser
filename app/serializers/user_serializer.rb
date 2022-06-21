class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :nickname, :style_influence
  
  has_many :outfits
  has_many :items
end
