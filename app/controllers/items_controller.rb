class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    items = Item.all.with_attached_image
    # @users = User.all.
    render json: items
  end


  def create
    item = Item.create!(item_params)
    render json: item, status: 201
  end

  def show
    item = Item.find_by(id: params[:id])
    render json: item
  end

  def destroy
    item = Item.find_by(id: params[:id])
    item.delete
    head :no_content
  end

  private
  def item_params
    params.permit(:item_type, :name, :color, :occasion, :user_id, :image)
  end
end
