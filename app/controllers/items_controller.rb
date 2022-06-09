class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    items = Item.all
    render json: items
  end

  def create
    item = Item.create!(item_params)
    render json: item, status: 201
  end

  private
  def item_params
    params.permit(:item_type, :name, :color, :occasion, :user_id, :image)
  end
end
